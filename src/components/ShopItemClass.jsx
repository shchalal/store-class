import React from "react";
import PropTypes from "prop-types";

export default class ShopItemClass extends React.Component {
  render() {
    const { brand, title, description, descriptionFull, price, currency } =
      this.props.item;

  
    const formattedPrice = `${currency}${Number(price).toFixed(2)}`;

    return (
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>

        <div className="description">{descriptionFull}</div>

        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>

        <div className="divider"></div>

        <div className="purchase-info">
          <div className="price">{formattedPrice}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
