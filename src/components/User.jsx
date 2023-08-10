const User = ({ userId }) => {
  let userName;
  switch (userId) {
    case 1:
      userName = "Mg Mg";
      break;
    case 2:
      userName = "Hla Hla";
      break;
    case 3:
      userName = "Mya Mya";
      break;
    case 4:
      userName = "Aung Aung";
      break;
    case 5:
      userName = "Tun Tun";
      break;
    default:
      userName = "Unknown User";
      break;
  }

  return (
    <h3>
      Posted by <span className="userID">{userName}</span>
    </h3>
  );
};

export default User;
