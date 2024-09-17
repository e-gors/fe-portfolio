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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const api = process.env.REACT_APP_API_DOMAIN;

  const [feedbackList, setFeedbackList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();

    fetchFeedbacks(controller);

    return () => controller.abort();
  }, []);

  const fetchFeedbacks = (controller) => {
    setLoading(true);
    publicHttp
      .get(`${api}/feedbacks`, { signal: controller.signal })
      .then((res) => {
        if (!isEmpty(res)) {
          setFeedbackList(res.data.data);
        }
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const feeds = feedbackList || feedbacks;

  return (
    <Box
      id="testimonials"
      sx={{
        overflow: "none",
        padding: { xs: "5%", md: "3% 10%" },
        backgroundColor: "#f9fafb",
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
          <Box maxWidth={400}>
            <Typography variant="h3">Hear what they say about me?</Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              We love our client and our clients loved us, see all feedback.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ my: { xs: 1, md: 0 } }}>
              <ContainedButton variant="contained">
                See all Feedback
              </ContainedButton>
              <OutlinedButton variant="outlined" onClick={handleOpen}>
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
