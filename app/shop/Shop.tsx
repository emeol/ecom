import { products } from "../util/productData";
import { Product } from "../components/Product";

export const Shop = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Shop</h1>
        <p className="text-sm text-black/65">Browse {products.length} products</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};