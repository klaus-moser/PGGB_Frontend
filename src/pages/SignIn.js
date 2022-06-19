import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/arrow-right.svg";
import VisibilityIcon from "../assets/svg/visibilityIcon.svg";
import { Button, Form, Alert, Image } from "react-bootstrap";

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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
          </Form.Group>

          <Image
            src={VisibilityIcon}
            alt="show password"
            onClick={() => setShowPassword((prevState) => !prevState)}
          />

          <Button variant="primary">Sign-In</Button>

          <Alert key="danger" variant="danger">
            <Alert.Link href="#">Forgot Password</Alert.Link>
          </Alert>

          <Alert key="secondary" variant="secondary">
            <Alert.Link href="#">Sign Up Instead</Alert.Link>
          </Alert>
        </Form>

        {/* Google OAuth */}
      </div>
    </>
  );
}

export default SignIn;
