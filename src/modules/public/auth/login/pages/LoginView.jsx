import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../../../components/FormField";
import { isEmpty, Validator } from "../../../../../utils/heplers";
import { ContainedButton } from "../../../../../components/CustomButtons";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SendIcon from "@mui/icons-material/Send";
import {
  options,
  ToastNotification,
  ToastNotificationContainer,
} from "../../../../../utils/toastConfig";
import * as service from "../../service";
import { useRouter } from "../../../../../routes/hooks";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../../redux/actions/userActions";

const userValidator = Validator({
  email: "required|email",
  password: "required",
});

function LoginView() {
  const router = useRouter();
  const dispatch = useDispatch();
  const accessToken = localStorage.getitem('accessToken');
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [userField, setUserField] = React.useState({
    values: {
      email: "",
      password: "",
    },
    errors: userValidator.errors,
  });

  React.useEffect(() => {
    if (!isEmpty(accessToken)) {
      router.push("/dashboard");
    }
  }, [accessToken, router]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserField((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
    }));

    const { errors } = userValidator.errors;

    userValidator.validate(name, value).then((success) => {
      if (!success) {
        setUserField((prev) => ({
          ...prev,
          errors,
        }));
      }
    });
  };

  const handleValidate = () => {
    userValidator.validateAll(userField.values).then((success) => {
      if (success) handleSubmit();
      else
        setUserField((prev) => ({
          ...prev,
          errors: userValidator.errors,
        }));
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    service
      .login(userField.values)
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("accessToken", JSON.stringify(res.data.token));
          dispatch(setUser(res.data.user));
          ToastNotification("success", res.data.message, options);
          router.push("/dashboard");
        } else {
          ToastNotification("error", res.data.message, options);
        }
      })
      .catch((error) => {
        ToastNotification("error", error.message, options);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleValidate();
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ToastNotificationContainer />
      <Paper sx={{ height: "100vh", width: "100vw" }}>
        <Box
          sx={{
            maxWidth: 400,
            width: "95%",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 4,
            boxShadow: 4,
            borderRadius: 1,
          }}
        >
          <Typography variant="h5">Login</Typography>

          <Box component="form" mt={2}>
            <FormField
              onKeyPress={handleKeyPress}
              required
              name="email"
              errors={userField.errors}
              onChange={handleChange}
              value={userField.values.email}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              InputProps={{
                style: {
                  background: "rgba(255, 255, 255, 0.5)",
                  color: "black",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormField
              required
              onKeyPress={handleKeyPress}
              name="password"
              errors={userField.errors}
              value={userField.values.password}
              onChange={handleChange}
              margin="normal"
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                style: {
                  background: "rgba(255, 255, 255, 0.5)",
                  coor: "black",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <ContainedButton
              fullWidth
              variant="contained"
              onClick={handleValidate}
              disabled={loading}
              endIcon={loading ? <CircularProgress size={24} /> : <SendIcon />}
              sx={{ my: 2 }}
            >
              Login
            </ContainedButton>
            <Grid container>
              <Grid item xs>
                <Link
                  href="/forgot-password"
                  variant="body2"
                  color="text.secondary"
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default LoginView;
