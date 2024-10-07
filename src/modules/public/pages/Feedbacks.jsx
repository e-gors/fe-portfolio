import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import {
  ContainedButton,
  OutlinedButton,
} from "../../../components/CustomButtons";
import { feedbacks } from "../../../_mock/feedbacks";
import FeedbackCard from "../components/FeedbackCard";
import publicHttp from "../../../utils/publicHttp";
import { isEmpty } from "../../../utils/heplers";
import CardSkeleton from "../../../components/CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  setRates,
  setTotalReviuews,
} from "../../../redux/actions/totalsActions";
import { options, ToastNotification } from "../../../utils/toastConfig";

const properties = [
  {
    variant: "rectangular",
    width: "100%",
    height: "100px",
  },
  {
    variant: "circular",
    width: 40,
    height: 40,
  },
  {
    variant: "rounded",
    width: 210,
    height: 60,
  },
];

function Feedbacks() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [feedbackList, setFeedbackList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

    fetchFeedbacks(controller);

    return () => {
      clearTimeout(timeoutId); // Clear timeout if the component unmounts before it finishes
      controller.abort(); // Clean up and abort the request
    };
  }, []);

  const fetchFeedbacks = (controller) => {
    setLoading(true);
    publicHttp
      .get("/feedbacks?status=approved", { signal: controller.signal })
      .then((res) => {
        if (!isEmpty(res)) {
          setFeedbackList(res.data.data);
          dispatch(setTotalReviuews(res.data?.data[0]?.reviews));
          dispatch(setRates(res.data?.data[0]?.rates));
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          ToastNotification(
            "error",
            "Request was aborted due to timeout.",
            options
          );
        } else {
          console.error(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const feeds = !isEmpty(feedbackList) ? feedbackList : feedbacks;

  return (
    <Box
      id="testimonials"
      sx={{
        overflow: "none",
        padding: { xs: "5%", md: "3% 10%" },
        backgroundColor:
            theme === "light" ? "var(--bg_white)" : "var(--bg_black)",
      }}
    >
      <FeedbackForm
        title="Say something about your experiences"
        description="Your feedback is important for me"
        open={open}
        handleClose={handleClose}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box maxWidth={450}>
            <Typography variant="h3" sx={{ lineHeight: 1 }} gutterBottom>
              Hear what they say about me?
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              We love our client and our clients loved us, see all feedback or
              you can add feedback if we are collaborating recently. Your
              feedback is important for me.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ my: { xs: 1, md: 0 } }}>
              <ContainedButton variant="contained">
                See all Feedback
              </ContainedButton>
              <OutlinedButton theme={theme} variant="outlined" onClick={handleOpen}>
                Add Feedback
              </OutlinedButton>
            </Stack>
          </Box>
        </Grid>
        {feeds?.map((feedback, index) => (
          <Grid key={index} item xs={12} md={6}>
            {loading ? (
              <CardSkeleton properties={properties} />
            ) : (
              <FeedbackCard {...feedback} index={index} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Feedbacks;
