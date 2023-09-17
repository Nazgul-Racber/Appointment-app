import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiDelete } from "react-icons/ti";


const AppointmentList = ({ apps, setApps }) => {
  console.log(apps);

  const handleDelete = (id) => {
    setApps(apps.filter((item) => item.id !== id))
  }
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(180, 24, 204)" }}>
        Appointment List
      </h3>
      {apps.length < 1 && <img src="./img/appointment.jpg" width="70%"/>}

      {apps.map(({ id, patient, consulted, doctor, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
        >
          <Row className="justify-content-between align-items-center">
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>{day}</h5>
            </Col>
            <Col className="text-end">
              <TiDelete
                className="text-danger fs-1"
                type="button"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
