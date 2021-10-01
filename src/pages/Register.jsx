import { RemoveRedEyeOutlined, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

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
  flex-direction: column;
  position: relative;
`;
const Input = styled.input`
  flex: 1;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 20px;
`;
const Agreement = styled.div`
  font-size: 12px;
`;
const Button = styled.button`
  border: none;
  width: 40%;
  padding: 10px;
  background-color: teal;
  color: white;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const Icon = styled.div`
  position: absolute;
  right: 2%;
  top: 28%;
`;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account </Title>
        <Button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "#A3E5AE",
            width: "16%",
          }}
        >
          Login
        </Button>
        <Form>
          <Input placeholder="username" />
          <Input
            placeholder="password"
            type={showPassword === false ? "text" : "password"}
          />
          <Icon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <RemoveRedEyeOutlined /> : <VisibilityOff />}
          </Icon>
          <Input placeholder="email" type="email" />
          <Agreement>
            By Creating ths account mean that you consent to follow the{" "}
            <b>Private Policy</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
