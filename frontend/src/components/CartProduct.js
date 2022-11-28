import { Cart } from "../Cart";
import { useContext } from "react";
import { getProductData } from "../Products";

function CartProduct(props) {
  const cart = useContext(Cart);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <div>
      <h5 className="" style={{color: "purple"}}>
        {productData.name}
      </h5>
      <h6>
        Quantity: {quantity}
      </h6>
      <p>
      {(quantity * productData.price).toFixed(2).toString().replace(".", ",").replace(/\,00/,'')}€
      </p>
      <button className="btn btn-warning" onClick={() => cart.deleteItem(id)}>
        Remove from cart
      </button>
      <hr />
    </div>
  );
}

export default CartProduct