import { FC } from "react";
import styled from "styled-components";
import { Header } from "../../assets/styles/styles";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Redirect, useRouteMatch } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import FormCreator from "../../components/FormCreator/FormCreator";
import { FieldValues, SubmitHandler } from "react-hook-form";

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 95vh;
  border: 1px solid lightblue;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: linear-gradient(#5f00d8, #c680cd, #f3d7ff);
  color: #fff;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  margin: 145px auto 0;
  height: 600px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 400px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const userLoginForm = {
  options: {
    onSubmit: () => console.log(1),
  },
  rows: ([] = [
    [
      {
        type: "input",
        label: "Name",
        dataName: "name"
      },
    ],
    [
      {
        type: "input",
        label: "Password",
        dataName: "password"
      },
    ],
  ]),
  // submitButtons: (formValue) => <>
  //     <Button/>
  // </>
  button: {
    variant: "contained",
    color: "primary",
    type: "submit",
    text: "LOGIN"
  },
  link: {
    path: "/registration",
    text: "don't have an account? SIGN UP"
  }
};

const LoginPage: FC = () => {
  const { token }: Storage = localStorage;

  return (
    <>
      {!token ? (
        <LoginPageWrapper>
          <InfoWrapper>
            <Info>
              <TextWrapper>
                <Header>Weather app</Header>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </TextWrapper>
              <small>copyright © 2021 . all rights reserved.</small>
            </Info>
          </InfoWrapper>

          <FormWrapper>
            <FormCreator form={userLoginForm} />
          </FormWrapper>
        </LoginPageWrapper>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default LoginPage;
