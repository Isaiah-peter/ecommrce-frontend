import React, { useState } from "react";
import styled from "styled-components";
import { RemoveRedEyeOutlined, VisibilityOff } from "@material-ui/icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f8ffae,
    #43c6ac
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f8ffae,
    #43c6ac
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background: white;
  border-radius: 10px;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 17px;
`;

const Button = styled.button`
  border: none;
  width: 40%;
  padding: 10px;
  background-color: teal;
  color: white;
  margin-top: 10px;
`;

const Icon = styled.div`
  position: absolute;
  right: 4%;
  top: 40%;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Title>Signin to you account </Title>
        <Form>
          <Input placeholder="email" type="email" />
          <Input
            placeholder="password"
            type={showPassword === false ? "password" : "text"}
          />
          <Icon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityOff /> : <RemoveRedEyeOutlined />}
          </Icon>
          <Button>Login</Button>
          <Button
            style={{
              position: "absolute",
              bottom: "0",
              right: "10px",
              background: "#A3E5AE",
            }}
          >
            Create a new account
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
