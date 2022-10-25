import styled from 'styled-components';

export const Input = styled.input`
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
