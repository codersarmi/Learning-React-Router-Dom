import { Link, json, useLoaderData } from "react-router-dom";
import "./Posts.css";
import User from "../components/User";

const Product = () => {
  const products = useLoaderData();
  return (
    <>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="post_box">
            <p className="post_title">{product.title}</p>
            <User userId={product.userId} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default Product;

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw json({ message: "Can't get data" }, { status: 500 });
  } else {
    const products = await response.json();

    return products;
  }
};
