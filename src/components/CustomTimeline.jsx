import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function CustomTimeline({
  experiences = [],
  position = "right",
}) {
  return (
    <Timeline position={position} sx={{ padding: 0 }}>
      {experiences?.map((experience, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent
            sx={{ m: "auto 0", flex: "1 1 0" }}
            variant="body2"
          >
            {experience.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" color="info">
              {experience.icon ?? null}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ flex: "3 1 0", px: {xs: 1, md: 3} }}>
            <Typography variant="h6" component="span" gutterBottom>
              {experience.title}{" "}
              {experience.company ? `at ${experience.company}` : ""}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {experience.description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

CustomTimeline.proptTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.node,
    })
  ).isRequired,
};
