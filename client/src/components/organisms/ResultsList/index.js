import React from "react";

import * as Styled from "./ResultsList.styles";
import TextWithIcon from "../../atoms/TextWithIcon";
import ShippingIcon from "../../../../static/shipping_icon.png";
import SmallPicture from "../../atoms/SmallPicture";
import Link from "../../atoms/Link";
import { ROUTES } from "../../../router/routes";

function ResultsList({ list }) {
  function _renderList() {
    return list.map(_renderListItem);
  }

  function _renderListItem({ id, price, title, city, picture, freeShipping }) {
    return (
      <Link href={ROUTES.ITEM_DETAIL.replace(":id", id)} key={id}>
        <Styled.Article>
          <SmallPicture src={picture} />
          <Styled.ProductInfo>
            {freeShipping ? (
              <TextWithIcon icon={ShippingIcon} alt="shipping icon">
                {price.readable}
              </TextWithIcon>
            ) : (
              <span>{price.readable}</span>
            )}
            <h1>{title}</h1>
          </Styled.ProductInfo>
          <Styled.CityInfo>
            <h2>{city}</h2>
          </Styled.CityInfo>
        </Styled.Article>
      </Link>
    );
  }

  return <Styled.Section>{_renderList()}</Styled.Section>;
}

export default ResultsList;
