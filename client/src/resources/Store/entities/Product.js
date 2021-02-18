import Price from "./Price";

export default class Product {
  constructor(data) {
    const {
      id,
      title,
      price,
      picture,
      condition,
      free_shipping,
      sold_quantity,
      description
    } = data;

    this.id = id;
    this.price = new Price(price);
    this.title = title;
    this.description = description;
    this.picture = picture;
    this.condition = condition;
    this.soldQuantity = sold_quantity;
    this.freeShipping = free_shipping;
  }
}
