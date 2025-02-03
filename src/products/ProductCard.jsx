import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className="product-div inter-font ">
      <div className="product-info">
        <div className="product-name">{props.product}</div>
        <div className="product-info-plus">
          <div className="product-qty">
            {props.qty} {props.unit}
          </div>
          <div className="product-price">
            {props.price} <p>lei</p>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="product-description ">{props.info}</div>
    </div>
  );
}
