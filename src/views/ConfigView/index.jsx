import { Link, Outlet } from "react-router-dom";

function ConfigView() {
  return (
    <div>
      <h1>Config</h1>
      <ul>
        <li>
          <Link to="/config/change-password">Change password</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default ConfigView;
