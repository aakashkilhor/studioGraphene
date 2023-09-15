import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
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
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    reset()
  };

  return (
    <Box sx={styles.container}>
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
              InputLabelProps={{ style: { padding: "0px 10px",color:"rgba(255, 255, 255, 0.50)" } }}
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
              InputLabelProps={{ style: { padding: "0px 10px",color:"rgba(255, 255, 255, 0.50)" } }}
              helperText={errors.email ? "Invalid email address" : ""}
              {...field}
            />
          )}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i,
              message: "Invalid Email ID. Please try again.",
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
              InputLabelProps={{ style: { padding: "0px 10px",color:"rgba(255, 255, 255, 0.50)" } }}
              {...field}
            />
          )}
        />

        <Button type="submit" sx={styles.submit}>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Form;
