// src/styled/StyledButton.tsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export default Button;
