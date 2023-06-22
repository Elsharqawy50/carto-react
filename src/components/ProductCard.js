import Button from "./UI/Button";

function ProductCard({ title, price, img, category }) {
  return (
    <div className="product-card shadow mb-4">
      <span
        className={`product-card__label ${
          category === "Items"
            ? "product-card__label-blue"
            : category === "Food"
            ? "product-card__label-green"
            : "product-card__label-gold"
        }`}
      >
        {category}
      </span>
      <img src={`img/${img}`} loading="lazy" alt="product-card" className="d-block w-100" />
      <div className="product-card__about-box d-flex flex-column align-items-center gap-4">
        <h5 className="product-card__heading text-capitalize">{title}</h5>
        <div className="product-card__price">${price}</div>
        <div className="actions-box">
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
