import { useParams } from "react-router-dom";

function DeviceView() {
  const { id: deviceId } = useParams();

  return (
    <div>
      <h1>Device by id: {deviceId}</h1>
    </div>
  );
}

export default DeviceView;
