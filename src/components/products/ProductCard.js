import Button from "components/UI/Button";
import ImgLoader from "components/UI/ImgLoader";
import { useDispatch } from "react-redux";
import { CartItemsActions } from "store/CartItemsSlice";

function ProductCard({ title, price, img, imgMin, category, id }) {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    const addObj = {
      title,
      price,
      img,
      amount: 1,
      id,
    };

    dispatch(CartItemsActions.addItem(addObj));
  };

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
      <ImgLoader
        imgSrc={`img/${img}`}
        minImgSrc={`url(img/${imgMin})`}
        boxHeight={"280px"}
      />
      <div className="product-card__about-box d-flex flex-column align-items-center gap-4">
        <h5 className="product-card__heading text-capitalize">{title}</h5>
        <div className="product-card__price">${price}</div>
        <div className="actions-box">
          <Button onClick={addItemHandler}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
