import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => (props.isReset ? '#9fe8e9' : '#00484c')};
  border-radius: 4px;
  color: ${(props) => (props.isReset ? '#00484c' : '#fff')};
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isReset ? 'none' : '#9fe8e9')};
    color: ${(props) => (props.isReset ? '' : '#00484c')};
    transition: 0.5s;
    opacity: ${(props) => (props.isReset ? '0.8' : 'none')};
  }
  ${(props) =>
    props.isReset &&
    `
  &:active {
    opacity: 0.5;
  }
  `}
`;
