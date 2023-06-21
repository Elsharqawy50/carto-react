import Button from "./UI/Button";

function ProductCard() {
  return (
    <div class="product-card shadow mb-3">
      <img
        src="img/${
      product.product_image
    }"
        alt="product-card image"
        class="d-block w-100"
      />
      <div class="product-card__about-box d-flex flex-column align-items-center gap-4">
        <h5 class="product-card__heading text-capitalize">product.product_name</h5>
        <div class="product-card__price">product.product_price?.toFixed(2)</div>
        <div class="actions-box">
          <Button>Add to cart</Button>
          <Button>View product</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
