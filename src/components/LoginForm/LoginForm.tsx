import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import CallService from "../../services/API";
import { v4 as uuidv4 } from "uuid";
import { AxiosResponse } from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 350px;
  margin: auto;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

const FormWrapper = styled.div`
  margin: auto;
  text-align: center;
`;

const FormButton = styled(Button)`
  width: 370px;

  .MuiButton-containedPrimary {
    margin-top: 10px;
  }
`;

const FormField = styled(TextField)`
  .MuiOutlinedInput-root {
    margin-bottom: 20px;
    width: 370px;
  }
`;

const RegisterLink = styled(Link)`
  margin: 0 auto;
  padding-bottom: 10px;

  &:hover {
    color: lightblue;
  }
`;

type FormValues = {
  user: {
    name: string;
    password: string;
  };
  dublicatePassword: string;
};

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { push } = useHistory();

  const confirmUser = (): void => {
    localStorage.setItem("token", uuidv4());
    push("/");
  };

  const handleUserSubmit: SubmitHandler<FormValues> = async ({ user }) => {
    const { name, password } = user;

    const { data }: AxiosResponse = await CallService.UserApi(`.json`, "get");
    const successUser: boolean =
      data && Object.keys(data).some(() => data[name]?.password === password);
    successUser && confirmUser();
  };

  return (
    <Form onSubmit={handleSubmit(handleUserSubmit)}>
      <FormWrapper>
        <FormField
          label="Name"
          {...register("user.name", { required: "This field if required" })}
          variant="outlined"
        />
        <ErrorMessage errors={errors} name="user.name" />

        <FormField
          label="Password"
          {...register("user.password", { required: "This field if required" })}
          variant="outlined"
        />
        <ErrorMessage errors={errors} name="user.password" />

        <FormButton variant="contained" color="primary" type="submit">
          LOGIN
        </FormButton>
      </FormWrapper>

      <RegisterLink to="/registration">
        don't have an account? SIGN UP
      </RegisterLink>
    </Form>
  );
};

export default LoginForm;
