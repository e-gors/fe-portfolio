import {
  Box,
  Grid,
  Rating,
  Typography,
  Button,
  Avatar,
  useMediaQuery,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const styles = {
  wrapper: {
    minHeight: "100vh",
    mt: { xs: 5, md: 0 },
    textAlign: "center",
    p: { xs: 2, sm: "50px 100px", md: "100px 200px" },
  },
  title: {
    fontSize: { xs: 24, sm: 36, md: 50 },
    textAlign: "center",
    fontWeight: "bold",
    color: "#9466eaff",
  },
  styledDivider: { height: 3, backgroundColor: "#9466eaff", mt: 2 },
  contentWrapper: { p: { xs: 2, sm: 5, md: 5 }, mt: 2 },
  commentsWrapper: {
    p: 2,
    boxShadow: 5,
    cursor: "pointer",
    transition: "0.5s",
    backgroundColor: "white",

    "&:hover": {
      boxShadow: 15,
    },
  },
  commentBoxWrapper: { display: "flex", mb: 1 },
  commentRight: { ml: 2 },
  name: { fontWeight: "bold" },
  position: { fontStyle: "italic" },
  company: {
    fontWeight: "bold",
  },
  readMoreButton: {
    marginTop: 1,
    cursor: "pointer",
    color: "#1976d2",
  },
};

const dummyData = [
  {
    id: 1,
    name: "Efren Goron",
    position: "Junior Web Developer",
    company: "CreativeDevLabs",
    rating: 4,
    comment:
      "I love how you are making your tasks done with a proficient and time management. I love it.",
  },
  {
    id: 2,
    name: "Criscilla Gumanid",
    position: "Graphic Artist",
    company: "CreativeDevLabs",
    rating: 5,
    comment:
      "I enjoyed working with you Efren I am looking forward to work with you again in a big project.",
  },
  {
    id: 3,
    name: "Cristela Gumanid",
    position: "Content Writer",
    company: "CreativeDevLabs",
    rating: 5,
    comment:
      "In many years that I work with you I realy learned a lot specially in how we handle tasks and time management. You really teach me alot of things that I don't know before. Thanks. Hope to work with you again.",
  },
  {
    id: 4,
    name: "leonardo Gumanid",
    position: "Senior Web Developer",
    company: "CreativeDevLabs",
    rating: 5,
    comment:
      "Efren is so teachable and eager to learn. Efren is so teachable and eager to learn. Efren is so teachable and eager to learn. Efren is so teachable and eager to learn. Efren is so teachable and eager to learn. Efren is so teachable and eager to learn. Efren is so teachable and eager to learn. Efren is so teachable and eager to learn. ",
  },
];

function Testimonial() {
  const [expandedStates, setExpandedStates] = useState([]);
  const isDesktop = useMediaQuery("(min-width: 960px)");

  // Determine the number of slides to display based on the device
  const slidesPerView = isDesktop ? 3 : 1;

  // Function to toggle the expanded state for a specific box
  const toggleExpanded = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !expandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <Box id="testimonial" sx={styles.wrapper}>
      <Typography sx={styles.title}>Testimonials</Typography>
      <Typography sx={{ fontSize: { xs: 16, md: 24 } }}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur excepteur.
      </Typography>
      <Divider sx={styles.styledDivider} />
      <Box sx={styles.contentWrapper}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {dummyData.map((data, index) => (
            <SwiperSlide key={index}>
              <Box sx={styles.commentsWrapper}>
                <Box sx={styles.commentBoxWrapper}>
                  <Avatar
                    alt={data.name}
                    src="#"
                    sx={{ width: 60, height: 60 }}
                  />
                  <Box sx={styles.commentRight}>
                    <Typography sx={styles.name}>{data.name}</Typography>
                    <Box>
                      <Typography component="span" sx={styles.position}>
                        {data.position}
                      </Typography>
                      <Typography component="span">, </Typography>
                      <Typography
                        component="span"
                        color="primary"
                        sx={styles.company}
                      >
                        {data.company}
                      </Typography>
                    </Box>
                    <Rating
                      name="simple-controlled"
                      value={data.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Box>
                </Box>
                <Typography
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: expandedStates[index] ? "unset" : 4,
                    overflow: expandedStates[index] ? "unset" : "hidden",
                    textOverflow: expandedStates[index] ? "unset" : "ellipsis",
                  }}
                >
                  {data.comment}
                </Typography>
                <Button
                  variant="text"
                  onClick={() => toggleExpanded(index)}
                  sx={styles.readMoreButton}
                >
                  {expandedStates[index] ? "Read less" : "Read more"}
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Testimonial;
