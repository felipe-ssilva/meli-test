import styled from 'styled-components'
import { theme } from '../../lib/styled';

export default styled.button`
  height: 40px;
  font-size: 15px;
  border-radius: 4px;
  color: ${theme('palette.white')};
  background-color: ${theme('palette.secondary.main')};
  margin-right: ${theme('spacing.quadruple')}px;
  cursor: pointer;
`