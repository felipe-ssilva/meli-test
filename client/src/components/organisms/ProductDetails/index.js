import React from "react";

import * as Styled from "./ProductDetails.styles";
import BigPicture from "../../atoms/BigPicture";
import ProductSideInfo from "../../molecules/ProductSideInfo";
import ProductDescription from "../../molecules/ProductDescription";

function ProductDetail({
  id,
  price,
  title,
  description,
  picture,
  condition,
  soldQuantity,
}) {
  return (
    <Styled.Article as="article" col="7fr 3fr">
      <BigPicture src={picture} style={{ flex: 7 }} />
      <ProductSideInfo
        id={id}
        price={price}
        title={title}
        condition={condition}
        soldQuantity={soldQuantity}
      />
      <ProductDescription description={description} />
    </Styled.Article>
  );
}

export default ProductDetail;
