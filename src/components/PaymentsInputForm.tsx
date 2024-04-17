import React, { useState } from 'react';
import PaymentsInputField from './PaymentsInputField';

import styled from 'styled-components';

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: black;
`;

const InputFieldContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const ErrorMessage = styled.div`
height: 12px;

color: #ff3d3d;
font-size: 9.5px;
font-weight: 400;
line-height: 12px;
  text-align: left;
`;


const PaymentsInputForm = ({ ...props }: PaymentsInputFormProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleErrorMessage = (errorMessage: string) => {
    setErrorMessage(errorMessage);
  }

  return (
    <InputForm>
      <Label>{props.label}</Label>
      <InputFieldContainer className="input-field-container">
        {props.inputFieldProps.map(
          (inputFieldProp: PaymentsInputFieldProps) => {
            return (
              <PaymentsInputField
                inputType={inputFieldProp.inputType}
                placeholder={inputFieldProp.placeholder}
                maxLength={inputFieldProp.maxLength}
                changeErrorMessage={handleErrorMessage}
              />
            );
          },
        )}
      </InputFieldContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputForm>
  );
};

export default PaymentsInputForm;
