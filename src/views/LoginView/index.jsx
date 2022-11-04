import { Link } from "react-router-dom";

function LoginView() {
  return (
    <div>
      <h1>Login</h1>
      <ul>
        <li>
          <Link to="/">Go to dashboard</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign-in</Link>
        </li>
      </ul>
    </div>
  );
}

export default LoginView;
