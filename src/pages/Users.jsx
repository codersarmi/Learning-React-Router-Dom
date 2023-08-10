import { json, useLoaderData } from "react-router-dom";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();

  return (
    <>
      {users.map((user) => (
        <div className="user_box" key={user.id}>
          <p>Name : {user.name}</p>
          <p>User Name : {user.username}</p>
        </div>
      ))}
    </>
  );
};

export default Users;

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw json({ message: "Can't get user !" }, { status: 404 });
  } else {
    const users = await response.json();

    return users;
  }
};
