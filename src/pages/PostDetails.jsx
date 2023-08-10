import { json, useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetails.css";
import User from "../components/User";

const ProductDetails = () => {
  const post = useLoaderData();
  const { title, id, body } = post;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>{title}</h1>
      <User userId={id} />
      <p>{body}</p>
      <button onClick={navigateHandler}>Go to Posts</button>
    </>
  );
};

export default ProductDetails;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  if (!response.ok) {
    throw json({ message: "Can't get post !" }, { status: 404 });
  } else {
    const posts = response.json();
    console.log(posts);
    return posts;
  }
};
