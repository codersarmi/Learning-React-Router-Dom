import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>Prouduct Details Page</h1>
      <h1>Product Title is - {title}</h1>
      <button onClick={navigateHandler}>Go to Products</button>
    </>
  );
};

export default ProductDetails;
