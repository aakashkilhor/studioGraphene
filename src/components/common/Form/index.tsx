import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Container } from "@mui/material";
import styles from "./styles";

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Name"
              variant="standard"
              sx={styles.input}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { padding: "0px 10px" } }}
              error={!!errors.name}
              helperText={errors.name ? "Name is required" : ""}
              {...field}
            />
          )}
          rules={{ required: "Name is required" }}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Email"
              variant="standard"
              sx={styles.input}
              fullWidth
              margin="normal"
              error={!!errors.email}
              InputLabelProps={{ style: { padding: "0px 10px" } }}
              helperText={errors.email ? "Invalid email address" : ""}
              {...field}
            />
          )}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
        />

        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{
            required: "Message is required",
          }}
          render={({ field }) => (
            <TextField
              label="Message"
              variant="standard"
              fullWidth
              sx={styles.input}
              margin="normal"
              InputLabelProps={{ style: { padding: "0px 10px" } }}
              {...field}
            />
          )}
        />

        <Button type="submit" sx={styles.submit}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
