import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const Form = styled.form`
  width: 400px;
  height: 350px;
  margin: auto;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

const FormWrapper = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  justify-content: center;
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

interface FormProps {
  form: {
    options: {
      onSubmit: SubmitHandler<FormValues>;
    };
    rows: Array<Array<{ type: string; label: string; dataName: string }>>;
    link: {
      path: string;
      text: string;
    };
    button: {
      variant: string;
      color: string;
      type: string;
      text: string;
    };
  };
}

type FormValues = {
  user: {
    name: string;
    password: string;
  };
  dublicatePassword: string;
};

const FormCreator: FC<FormProps> = ({ form }) => {
  const { options, rows, link, button } = form;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <Form onSubmit={handleSubmit(options.onSubmit)}>
      <FormWrapper>
        {rows.map((row) => {
          return row.map((item) => {
            switch (item.type) {
              case "input":
                return <FormField key={item.label} label={item.label} />;
              default:
                break;
            }
          });
        })}
      </FormWrapper>

      {button && (
        // @ts-ignore
        <FormButton
          variant={button.variant}
          color={button.color}
          type={button.type}
        >
          {button.text}
        </FormButton>
      )}
      {link && <RegisterLink to={link.path}>{link.text}</RegisterLink>}
    </Form>
  );
};

export default FormCreator;
