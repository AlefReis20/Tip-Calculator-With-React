import { Button as AllButtons } from './style';

function Button({ children, ...props }) {
  return <AllButtons {...props}>{children}</AllButtons>;
}

export default Button;
