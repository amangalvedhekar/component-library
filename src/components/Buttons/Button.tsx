import * as React from 'react';
import styled from 'styled-components';

export interface IButtonProps {
    children?: React.ReactNode,
    onClick?: (e:any) => void,
    style?: {},
    primary?: string,
}
const styles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    fontSize: 15,
    padding: '3px 10px',
    margin: 10,
};
const SomeButton = styled.button`
  background: ${(props: IButtonProps) => props.primary ? "blue" : "white"};
  color: ${(props: IButtonProps) => props.primary ? "white" : "blue"};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

const Button: React.FunctionComponent<IButtonProps> = props => (
    <button onClick={props.onClick} style={styles} type="button">
        {props.children}
    </button>
);
Button.defaultProps = {
    children: null,
    onClick: () => {}
};
export default SomeButton;
