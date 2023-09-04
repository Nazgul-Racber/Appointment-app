import Container from "react-bootstrap/Container"
import { doctorData } from "../helper/data"
import  Row  from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col"

const Doctors = () => {
  console.log(doctorData)
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(8, 162, 168)" }}>
        Our Doctors
      </h3>
      
      <Row>
        {doctorData.map((item) => (
        <Col></Col>
      ))}
      </Row>

      
    </Container>
  )
}

export default Doctors
