import { P } from './style';

function Paragraph({ children, ...props }) {
  return <P {...props}>{children}</P>;
}

export default Paragraph;
