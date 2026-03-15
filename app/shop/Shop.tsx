import { products } from "../util/productData";
import { Product } from "../components/Product";

export const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <p>Browser for {products.length} products</p>
      <div className="products">
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};