import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "../assets/svg/visibilityIcon.svg";
import { Button, Form, Alert, Image, Row, Col } from "react-bootstrap";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

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
            <h2>Welcome Back</h2>
          </p>
        </header>

        <Form>
          <Row>
            <Col sm={5}>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>
            </Col>
            <Col sm={5}>
              <Form.Floating className="mb-3">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
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
              <Button variant="primary">Sign-In</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Alert key="danger" variant="danger">
                <Alert.Link href="/forgot-password">Forgot Password</Alert.Link>
              </Alert>
            </Col>

            <Col>
              <Alert key="secondary" variant="secondary">
                <Alert.Link href="/sign-up">Sign Up Instead</Alert.Link>
              </Alert>
            </Col>
          </Row>
        </Form>

        {/* Google OAuth */}
      </div>
    </>
  );
}

export default SignIn;
