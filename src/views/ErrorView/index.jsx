import { Link } from "react-router-dom";

function ErrorView() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Link to="/">Main</Link>
      </p>
    </div>
  );
}

export default ErrorView;
