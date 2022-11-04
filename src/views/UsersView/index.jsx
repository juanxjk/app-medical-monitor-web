import { Link } from "react-router-dom";

function UsersView() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/user/1">User 1</Link>
        </li>
        <li>
          <Link to="/user/1">User 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default UsersView;
