import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import CallService from "../../services/API";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

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

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { push } = useHistory();

  const handleUserSubmit: SubmitHandler<FormValues> = async ({
    user,
    dublicatePassword,
  }) => {
    const { name, password } = user;

    if (password === dublicatePassword) {
      await CallService.UserApi(`${name}.json`, "put", user);
      confirmUser();
    }
  };

  const confirmUser = (): void => {
    localStorage.setItem("token", uuidv4());
    push("/");
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

        <FormField
          label="Repeat password"
          {...register("dublicatePassword")}
          variant="outlined"
        />

        <FormButton variant="contained" color="primary" type="submit">
          SIGN UP
        </FormButton>
      </FormWrapper>

      <RegisterLink to="/login">already have an account? SIGN IN</RegisterLink>
    </Form>
  );
};

export default RegistrationForm;
