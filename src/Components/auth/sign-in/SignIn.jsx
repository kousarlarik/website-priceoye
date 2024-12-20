import { Box } from "@mui/material";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();

  const schema = yup.object({
    fullName: yup
      .string()
      .min(3, "Full name must be at least 3 characters long.")
      .required("Full name is required."),
    email: yup.string().required("Email address is required."),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Password must be 8 characters long.")
      .matches(/[0-9]/, "Password requires a number.")
      .matches(/[a-z]/, "Password requires a lowercase letter.")
      .matches(/[A-Z]/, "Password requires an uppercase letter.")
      .matches(/[^\w]/, "Password requires a symbol."),
  });

  const signUpDetails = {
    fullName: "",
    email: "",
    password: "",
  };
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: signUpDetails,
    resolver: yupResolver(schema),
  });

  const signUpHandler = (data) => {

    localStorage.setItem("user", JSON.stringify(data));
  navigate('/sign-in')
    reset();
    
  };

  return (
    <Box className="bg-slate-100 h-screen">
      <Box className="flex flex-col w-full justify-center items-center pt-14">
        <Box className="w-96">
          <img
            src="https://static.priceoye.pk/images/login-header-img.svg"
            alt=""
          />
        </Box>
        <Box>
          <Box className="w-96 bg-white p-5">
            <Typography variant="h5" className="text-center text-base">
              Sign Up
            </Typography>
            <Box className="text-center mt-2 mb-5 text-sm">
              <Typography>Enter your details to create an account.</Typography>
            </Box>

            <form onSubmit={handleSubmit(signUpHandler)}>
              <Box>
                <Box className="my-3">
                  <Controller
                    name="fullName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Full Name"
                        {...field}
                      />
                    )}
                  />
                  <Typography color="error">
                    {errors?.fullName?.message}
                  </Typography>
                </Box>

                <Box className="my-3">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        fullWidth
                        type="email"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Email"
                        {...field}
                      />
                    )}
                  />
                  <Typography color="error">
                    {errors?.email?.message}
                  </Typography>
                </Box>
                <Box className="my-3">
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        size="small"
                        id="outlined-adornment-password"
                        variant="outlined"
                        placeholder="Password"
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label={
                                showPassword
                                  ? "hide the password"
                                  : "display the password"
                              }
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <FontAwesomeIcon icon={faEyeSlash} />
                              ) : (
                                <FontAwesomeIcon icon={faEye} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        {...field}
                      />
                    )}
                  />
                  <Typography color="error">
                    {errors?.password?.message}
                  </Typography>
                </Box>
                <Box className="my-3">
                  <Button
                    type="submit"
                    variant="contained"
                    className="text-capitalize"
                    fullWidth
                    sx={{ backgroundColor: "#48afff", textTransform: "none" }}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn