import { Link } from "react-router-dom";

function PatientsView() {
  return (
    <div>
      <h1>Patients</h1>
      <ul>
        <li>
          <Link to="/patient/1">Patient 1</Link>
        </li>
        <li>
          <Link to="/patient/2">Patient 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default PatientsView;
