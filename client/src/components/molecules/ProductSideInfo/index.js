import React from "react";

import * as Styled from "./ProductSideInfo.styles";
import Button from "../../atoms/Button";

function ProductSideInfo({ id, price, title, condition, soldQuantity }) {
  return (
    <Styled.Section>
      <Styled.ConditionSpan>
        {condition} - {soldQuantity} vendidos
      </Styled.ConditionSpan>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Price>{price.readable}</Styled.Price>

      <Button>Comprar</Button>
    </Styled.Section>
  );
}

export default ProductSideInfo;
