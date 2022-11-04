import { Link } from "react-router-dom";

function DevicesView() {
  return (
    <div>
      <h1>Devices</h1>
      <ul>
        <li>
          <Link to="/device/1">Device 1</Link>
        </li>
        <li>
          <Link to="/device/2">Device 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default DevicesView;
