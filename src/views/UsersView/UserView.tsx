import { useParams } from "react-router-dom";

function UserView() {
  const { id: userId } = useParams();

  return (
    <div>
      <h1>User by id: {userId}</h1>
    </div>
  );
}

export default UserView;
