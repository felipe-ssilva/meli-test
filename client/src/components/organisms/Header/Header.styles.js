import styled from 'styled-components'

import { theme } from '../../../lib/styled';
import Content from '../../atoms/Content';

export const Nav = styled(Content).attrs({
  as: 'nav'
})`
  display: flex;
  align-items: center;
  height: ${theme('spacing.appBar')}px;
  background-color: ${theme('palette.primary.main')};
`
