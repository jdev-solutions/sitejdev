
import './styles.css';
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';

interface FormError {
  field: string;
  message: string;
}

function Contato() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formTitle, setFormTitle] = useState('Faça um orçamento sem compromisso!');

  const localHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) {
      newErrors.name = 'Campo obrigatório';
      hasErrors = true;
    }

    if (!formData.phone || !/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = 'Digite um número de telefone válido';
      hasErrors = true;
    }

    if (!formData.message) {
      newErrors.message = 'Campo obrigatório';
      hasErrors = true;
    }

    if (hasErrors) {
      const errorArray: FormError[] = Object.entries(newErrors).map(([field, message]) => ({
        field,
        message,
      }));
      setFormErrors(errorArray);
      return;
    }

    try {
      // Código para enviar o formulário para o serviço Formspree
      const response = await fetch('https://formspree.io/f/mwpvlqke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // console.log('Formulário enviado com sucesso!');
        setIsFormSubmitted(true); 
        // Exibe o SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Formulário enviado!',
          text: 'Obrigado pelo contato! Te chamaremos em breve.',
          confirmButtonText: 'Fechar',
        }).then(() => {
          // Altera o título do formulário ao fechar o Swal
          setFormTitle('Obrigado por enviar! Recarregue a página.');
        });

        // Limpa os dados do formulário
        setFormData({ name: '', phone: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao enviar',
          text: 'Houve um problema ao enviar o formulário. Tente novamente.',
        });
      }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro de conexão',
          text: 'Não foi possível enviar o formulário. Verifique sua conexão.',
        });
      }
  };

  const [state] = useForm('mwpvlqke');
  const [formErrors, setFormErrors] = useState<FormError[]>([]);
  const [, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);

      setTimeout(() => {
        window.location.href = 'https://jdevsolutions.com.br/';
      }, 3000); // 3 segundos
    } else if (state.errors) {
      // Submissão com erro
      const errorArray: FormError[] = Object.entries(state.errors).map(([field, message]) => ({
        field,
        message: message as unknown as string,
      }));
      setFormErrors(errorArray);
    }
  }, [state.succeeded, state.errors])

  return (
    <header className="main-contato" id='contact'>
        <h2 className='subtitle-contato'>{formTitle}</h2>
        <form action="contato-form" onSubmit={localHandleSubmit}>
        {!isFormSubmitted && (
        <>
          <div className="contato-box">
            <div className="input-box-1">
              <div className="input-div">
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' name='name' value={formData.name} onChange={handleInputChange}/>
                {formErrors.map((error) =>
                  error.field === 'name' ? <ValidationError errors={[]} key={error.field}>{error.message}</ValidationError> : null
                )}
              </div>
              <div className="input-div">
                <label htmlFor="phone">Telefone</label>
                  <InputMask
                    mask="(99) 99999-9999"
                    maskChar=""
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(00) 00000-0000"
                  />
                {formErrors.map((error) =>
                  error.field === 'phone' ? <ValidationError errors={[]} key={error.field}>{error.message}</ValidationError> : null
                )}
              </div>
            </div>
            <br />
            <div className="input-box-2">
              <div className="input-div">
                <label htmlFor="message">O que você precisa?</label>
                <input type="text" id="message" name="message" value={formData.message} onChange={handleInputChange} />
                {formErrors.map((error) =>
                  error.field === 'message' ? (
                    <ValidationError errors={[]} key={error.field}>{error.message}</ValidationError>
                  ) : null
                )}
              </div>
              <button type="submit" disabled={state.submitting} className="send-button">Enviar</button>
            </div>
          </div>
        </>
        )}
        </form>
    </header>
  );
}

export default Contato;