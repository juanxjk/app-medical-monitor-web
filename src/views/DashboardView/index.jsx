import { Link, Outlet } from "react-router-dom";

function DashboardView() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/config">Config</Link>
      </p>
      <p>
        <Link to="/login">Login</Link>
      </p>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/patients">Patients</Link>
        </li>
        <li>
          <Link to="/devices">Devices</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default DashboardView;
