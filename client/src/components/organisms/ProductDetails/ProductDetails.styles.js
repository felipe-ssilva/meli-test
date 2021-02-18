import styled from 'styled-components';

import Grid from '../../atoms/Grid';
import { theme } from '../../../lib/styled';

export const Article = styled(Grid).attrs({
  as: 'article',
  col: '7fr 3fr',
})`
  padding: ${theme('spacing.unit')}px;
  color: ${theme('palette.text.dark')};
  background-color: ${theme('palette.white')};
`