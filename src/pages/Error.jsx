import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let errorTitle = "Unknown Error Occur !";
  if (error.status === 500) {
    errorTitle = error.data.message;
  }

  return (
    <section>
      <h1>{errorTitle}</h1>
      <Link to={"/"}>
        <button>Go to Home</button>
      </Link>
    </section>
  );
};

export default Error;
