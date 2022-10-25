import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Space Mono', monospace;
      border: none;
      outline: none;
      text-decoration: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #c5e4e6;
`;

export const Image = styled.img`
  align-self: center;
  justify-self: center;
`;

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 1rem;
  width: 600px;
  height: 350px;
  gap: 5%;
`;

export const DivLeft = styled.div`
  display: grid;
  gap: 10px;
`;

export const DivSon = styled.div`
  display: grid;
`;

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 10px 40px 40px;
  gap: 16px;
`;

export const CustomInput = styled.input`
  font-size: 24px;
  width: 100%;
  border-radius: 4px;
  text-align: right;
  padding: 10px;
  background-color: #f4f9fa;
  cursor: pointer;
  &::placeholder {
    font-size: 16px;
    text-align: center;
  }
  &:focus {
    border: 1px solid #25bfab;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const InputBill = styled.input`
  font-size: 24px;
  width: 100%;
  border-radius: 4px;
  text-align: right;
  padding: 10px;
  background-color: #f4f9fa;
  cursor: pointer;
  grid-row: 2/3;
  background: url('../src/assets/icon-dollar.svg') no-repeat left;
  background-position: 10px;
  background-color: #f4f9fa;
  height: 40px;
  &:focus {
    border: 1px solid #25bfab;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const InputPerson = styled.input`
  font-size: 24px;
  width: 100%;
  border-radius: 4px;
  text-align: right;
  padding: 10px;
  background-color: #f4f9fa;
  cursor: pointer;
  grid-row: 2/3;
  background: url('../src/assets/icon-person.svg') no-repeat left;
  background-position: 10px;
  background-color: #f4f9fa;
  height: 40px;
  &:focus {
    border: 1px solid #25bfab;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: 12px;
  color: #7f9c9e;
`;

export const DivRight = styled.div`
  display: grid;
  grid-template-rows: 30% 30% 30% 10%;
  background-color: #00484c;
  border-radius: 12px;
  padding: 25px;
  align-items: center;
`;

export const DivParagraphs = styled.div`
  align-self: center;
`;

export const Footer = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  text-align: center;
  color: #0d686d;
  a {
    color: #00484c;
    margin-left: 10px;

    &:hover {
      color: #25bfab;
      transition: 0.3s;
      text-decoration: underline;
    }
  }
`;
