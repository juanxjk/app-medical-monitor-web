import { useParams } from "react-router-dom";

function PatientView() {
  const { id: patientId } = useParams();

  return (
    <div>
      <h1>Patient by id: {patientId}</h1>
    </div>
  );
}

export default PatientView;
