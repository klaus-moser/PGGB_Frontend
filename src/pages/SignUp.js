import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "../assets/svg/visibilityIcon.svg";
import { Button, Form, Alert, Image, Row, Col } from "react-bootstrap";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div>
        <header>
          <p>
            <h2>Register</h2>
          </p>
        </header>

        <Form>
          <Row>
            <Col sm={3}>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  id="name"
                  value={name}
                  onChange={onChange}
                />
                <label htmlFor="floatingInputCustom">Name</label>
              </Form.Floating>
            </Col>
            <Col sm={3}>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>
            </Col>
            <Col sm={3}>
              <Form.Floating className="mb-3">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={onChange}
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
              </Form.Floating>
            </Col>
            <Col sm={"auto"}>
              <Image
                src={VisibilityIcon}
                alt="show password"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </Col>

            <Col sm={"auto"}>
              <Button variant="primary">Sign-Up</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Alert key="secondary" variant="secondary">
                <Alert.Link href="/sign-in">Sign In Instead</Alert.Link>
              </Alert>
            </Col>
          </Row>
        </Form>

        {/* Google OAuth */}
      </div>
    </>
  );
}

export default SignUp;
