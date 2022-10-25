import styled from 'styled-components';

export const P = styled.p`
  grid-column: 1/4;
  grid-row: ${(props) => (props.gridrow ? '1/2' : '1/1')};
  font-size: ${(props) =>
    (props.fontsize === '14px' && '14px') ||
    (props.fontsize === '10px' && '10px') ||
    '12px'};
  color: ${(props) => (props.color ? '#fff' : '#7f9c9e')};
`;
