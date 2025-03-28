import styled from "styled-components";
import { Link } from "react-router";

const Container = {
  Container: styled.main`
    height: 100vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Form: styled.form`
    width: 100%;
    margin-top: 10px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Input: styled.div`
    > input {
      width: 50%;
      padding: 5px 10px;
      font-size: 1rem;
    }
  `,
  Buttons: styled.div`
    margin-top: 50px;
    padding-top: 10px;
    border-top: 1px solid var(--bd-color);
    display: flex;
    gap: 20px;

    > button {
      padding: 5px 20px;
    }
  `,
};

const Register = () => {
  const InputList = [
    {
      label: "Email",
      placeholder: "Enter your email address.",
    },
    {
      label: "Username",
      placeholder: "Enter your desired username.",
    },
    {
      label: "Password",
      placeholder: "Enter your desired password.",
    },
    {
      label: "Confirm password",
      placeholder: "Repeat your password.",
    },
  ];

  return (
    <Container.Container>
      <h1>MAKE AN ACCOUNT</h1>
      <Container.Form>
        {InputList.map((input) => {
          return (
            <Container.Input key={input.placeholder}>
              <p>{input.label}</p>
              <input placeholder={input.placeholder} />
            </Container.Input>
          );
        })}
      </Container.Form>
      <Container.Buttons>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/safety">SAFETY</Link>
        <Link to="/about">ABOUT</Link>
      </Container.Buttons>
    </Container.Container>
  );
};

export default Register;
