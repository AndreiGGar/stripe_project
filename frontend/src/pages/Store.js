import { arrayProducts } from "../Products";
import Product from "../components/Product";

function Store() {
  return (
    <div>
      <h1 className="mt-3">Main page store</h1>
      <div className="row g-4 mt-2 mb-4">
        {arrayProducts.map((product, index) => (
          <div className="col-md-4" key={index}>
            <Product product={product}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
