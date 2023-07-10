import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement, memo } from "react";
import { currencyFormatter } from "../utils/functions/currencyFormatter";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  //   const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
  //     .href;
  const img: string = process.env.PUBLIC_URL + `/images/${product.sku}.jpg`;

  console.log("img:", img);

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? " ✔️ -> Product in Cart" : null;

  const content = (
    <article className="product">
      <h3 className="product__title">{product.name}</h3>

      <img
        // src={`/images/${product.sku}.jpg`}
        src={img}
        alt={product.name}
        className="product__img"
      />
      <p>
        {currencyFormatter(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add To Cart</button>
    </article>
  );

  return content;
};

function areProductsEqual(
  { product: prevProduct, inCart: prevInCart }: PropsType,
  { product: nextProduct, inCart: nextInCart }: PropsType
) {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
      );
    }) && prevInCart === nextInCart
  );
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;
