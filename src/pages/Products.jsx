import { Link } from "react-router-dom";
import "./Products.css";

const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptate error placeat inventore ratione, harum dolorum corrupti molestias, eaque vitae, quibusdam optio aut expedita. Aspernatur beatae culpa animi vero in!",
  },
  {
    id: 2,
    title: "Mango",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptate error placeat inventore ratione, harum dolorum corrupti molestias, eaque vitae, quibusdam optio aut expedita. Aspernatur beatae culpa animi vero in!",
  },
  {
    id: 3,
    title: "Orange",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptate error placeat inventore ratione, harum dolorum corrupti molestias, eaque vitae, quibusdam optio aut expedita. Aspernatur beatae culpa animi vero in!",
  },
];

const Product = () => {
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.title}`}>
          <div className="product_box" key={product.id}>
            <p className="product_title">{product.title}</p>
            <p className="product_description">{product.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Product;
