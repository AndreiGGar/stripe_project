import { Cart } from "../Cart";
import { useContext } from "react";

function Product(props) {
  const { product } = props;
  const cart = useContext(Cart);
  const quantity = cart.getQuantity(product.id);

  return (
    <div className="card mb-2 h-100">
      <img
        src={product.image}
        className="card-img-top img-fluid w-75"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}€</p>
        {quantity > 0 ? (
          <div className="row">
            <div className="row m-auto">
              <div className="col-6">In cart: {quantity}</div>
              <div className="col-6">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => cart.addItem(product.id)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => cart.removeItem(product.id)}
                >
                  -
                </button>
              </div>
              <button
                type="button"
                className="btn btn-danger w-75 mt-4 m-auto"
                onClick={() => cart.deleteItem(product.id)}
              >
                Remove from cart
              </button>
            </div>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => cart.addItem(product.id)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
