import React, { forwardRef } from 'react';
// @ts-ignore: forçar a compatibilidade com JSX
import ReactInputMask from 'react-input-mask';

type InputProps = {
  mask: string;
  maskChar?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// Definir tipos para o ReactInputMask
const InputMask = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { mask, maskChar, ...rest } = props;
  
  return (
    <ReactInputMask
      {...rest}
      mask={mask}
      maskChar={maskChar}
      ref={ref as any} // Forçando a compatibilidade com ref
    >
      {(inputProps: any) => <input {...inputProps} ref={ref} />}
    </ReactInputMask>
  );
});

InputMask.displayName = 'InputMask';

export default InputMask;