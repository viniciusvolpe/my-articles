import styled from 'styled-components';

const backgroundLight = ({ theme }) => theme.main.palete.backgroundLight;

const Form = styled.form`
  margin: 10px 100px;
  padding: 20px;
  background-color: ${backgroundLight};
`;

export default Form;
