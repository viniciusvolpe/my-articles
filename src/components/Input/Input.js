// @flow
import * as React from 'react';
import styled from 'styled-components';

const smallFontSize = ({ theme }) => theme.main.font.small;
const borderColor = ({ theme }) => theme.main.palete.primary;
const requiredColor = ({ theme }) => theme.main.palete.danger;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  margin-bottom: 5px;
`;
const InputField = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${borderColor};
  :focus {
    outline: unset;
    caret-color: white;
    border-bottom: 2px solid #bb9fff;
    padding: 5px;
  }
`;
const Label = styled.label`
  font-size: ${smallFontSize};
`;
const Validation = styled.span``;
const RequiredMark = styled.span`
  color: ${requiredColor};
`;

type Props = {
  type: string,
  name: string,
  id: string,
  label: string,
  required: boolean,
  onChange: (event: SyntheticEvent<HTMLInputElement>) => {},
  onBlur: (event: SyntheticEvent<HTMLInputElement>) => {},
  values: Object,
  errors: Object,
  touched: Object,
};

function Input({ values, errors, touched, ...props }: Props): React.Node {
  return (
    <FieldGroup>
      <Label forHtml={props.id}>
        {props.label}
        {props.required ? <RequiredMark> *</RequiredMark> : null}
      </Label>
      <InputField {...props} value={values[props.name]} />
      {errors[props.name] && touched[props.name] ? (
        <Validation>{errors[props.name]}</Validation>
      ) : null}
    </FieldGroup>
  );
}

export default Input;
