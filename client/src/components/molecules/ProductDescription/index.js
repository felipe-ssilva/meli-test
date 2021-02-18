import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../lib/styled';

const Section = styled.section `
  margin-left: ${theme('spacing.quadruple')}px;
`

const Title = styled.h2`
  font-size: 28px;
`

const Description = styled.p`
  color: ${theme('palette.text.main')};
  font-size: 16px;
  margin: ${theme('spacing.quadruple')}px 0;
`


function ProductDescription({ description }) {
  return (
    <Section>
      <Title>Descripción del producto</Title>
      <Description>{description}</Description>
    </Section>
  )
}

export default ProductDescription