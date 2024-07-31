import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = (status, message, options) => {
  if (status === "success") return toast.success(message, options);
  else return toast.error(message, options);
};

const ToastNotificationContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  draggable: true,
  draggableDirection: "x" | "y",
  draggablePercent: 60,
  theme: "colored",
};

export { options, ToastNotification, ToastNotificationContainer };
