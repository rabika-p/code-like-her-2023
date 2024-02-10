import { useState, useEffect, useContext, useMemo } from "react";

import { Link } from "react-router-dom";

import client, { endpoints } from "../utils/client";
import { ProductContext } from "../contexts/ProductContext";

const ProductList = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  // Recalculate value of products when it changes
  const memoProducts = useMemo(() => products, [products]);

  useEffect(() => {
    // Check if memoProducts is empty and fetch products if so
    if (memoProducts.length === 0) {
      client
        .get(endpoints.products.list)
        .then((res) => {
          setProducts(res.data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setProducts([]);
        });
    }
    // In case products are already available
    else {
      setLoading(false);
    }
  }, [memoProducts.length, setProducts]);

  return (
    <>
      {loading ? (
        <p> Loading... </p>
      ) : (
        <section className="p-10 bg-[#e4eaf5]">
          <h2 className="text-5xl font-medium text-center">Product List</h2>
          <div className="mb-5 flex justify-end">
            <Link to={`/add-product`}>
              <button className="bg-[#3b64ec] hover:bg-blue-700 cursor-pointer text-white py-2 px-4 rounded">
                Add Product
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {products.map((product) => (
              <div key={product.id} className="p-10 bg-white rounded-3xl">
                <div className="flex justify-center">
                  <img
                    className="h-48 object-fill"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </div>

                <p className="my-4 text-xl font-medium"> {product.title} </p>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-blue-500 font-medium">
                    ${product.price}
                  </p>
                  <button className="bg-[#e23860] hover:bg-red-700 cursor-pointer text-white py-2 px-3 rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ProductList;
