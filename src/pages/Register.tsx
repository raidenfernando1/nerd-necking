import styled from "styled-components";
import Navbar from "../components/Navbar";

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
  Input: styled.input`
    border: 0px solid;
    border-bottom: 1px solid var(--bd-color);
    width: 50%;
    padding: 5px 0px;
    font-size: 1rem;'
  `,
  CTA: styled.div`
    display: flex;
    gap: 10px;

    > button {
      padding: 5px 10px;
    }
  `,
};

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

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
            <div key={input.placeholder}>
              <p>{input.label}</p>
              <Container.Input placeholder={input.placeholder} />
            </div>
          );
        })}
        <Container.CTA>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </Container.CTA>
      </Container.Form>
      <Navbar navItems={navItems} />
    </Container.Container>
  );
};

export default Register;
