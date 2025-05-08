import './styles.css';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useForm } from '@formspree/react';
import InputMask from '../InputMask';
import Swal from 'sweetalert2';
import send from '../../assets/send1.png';

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formTitle, setFormTitle] = useState('Faça um orçamento sem compromisso!');
  const [formErrors, setFormErrors] = useState<FormError[]>([]);
  const [state] = useForm('mwpvlqke');
  const [, setSubmitted] = useState(false);

  const localHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      const errorArray: FormError[] = Object.entries(newErrors).map(([field, message]) => ({ field, message }));
      setFormErrors(errorArray);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mwpvlqke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        Swal.fire({
          icon: 'success',
          title: 'Formulário enviado!',
          text: 'Obrigado pelo contato! Te chamaremos em breve.',
          confirmButtonText: 'Fechar',
        }).then(() => {
          setFormTitle('Obrigado por enviar! Recarregue a página.');
        });

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

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = 'https://jdevsolutions.com.br/';
      }, 3000);
    } else if (state.errors) {
      // se quiser mapear os erros da API Formspree, adapte aqui
    }
  }, [state.succeeded, state.errors]);

  const getFieldError = (fieldName: string) =>
    formErrors.find((error) => error.field === fieldName)?.message;

  return (
    <header className="main-contato" id="contact">
      <h2 className="subtitle-contato">{formTitle}</h2>
      <form onSubmit={localHandleSubmit}>
        {!isFormSubmitted && (
          <div className="contato-box">
            <div className="input-box-1">
              <div className="input-div">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                {getFieldError('name') && <p className="error">{getFieldError('name')}</p>}
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
                {getFieldError('phone') && <p className="error">{getFieldError('phone')}</p>}
              </div>
            </div>

            <br />

            <div className="input-box-2">
              <div className="input-div">
                <label htmlFor="message">O que você precisa?</label>
                <input type="text" id="message" name="message" value={formData.message} onChange={handleInputChange} />
                {getFieldError('message') && <p className="error">{getFieldError('message')}</p>}
              </div>

              <button type="submit" disabled={state.submitting} className="send-button">
                Enviar
                <img src={send} className="enviar-send" alt="icone" />
              </button>
            </div>
          </div>
        )}
      </form>
    </header>
  );
}

export default Contato;