/* eslint-disable react/prop-types */
const User = ({ userId }) => {
  let userName;
  switch (userId) {
    case 1:
      userName = "David";
      break;
    case 2:
      userName = "Peter";
      break;
    case 3:
      userName = "Papa";
      break;
    case 4:
      userName = "Nunu";
      break;
    case 5:
      userName = "Yee Mon Kyaw";
      break;
    case 6:
      userName = "Peter's Wife";
      break;
    case 7:
      userName = "My Son";
      break;
    default:
      userName = "Unknown User";
  }
  return (
    <div>
      Posted By - <span className="text-lg">{userName}</span>
    </div>
  );
};

export default User;
