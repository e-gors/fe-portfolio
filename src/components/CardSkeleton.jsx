import { Box, Card, Skeleton } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function CardSkeleton(props) {
  const { properties = [], sx = {} } = props;

  return (
    <>
      <Box {...sx}>
        <Card sx={{ p: 2, boxShadow: 4 }}>
          {properties.map((property, idx) => (
            <Skeleton
              key={idx}
              animation="wave"
              variant={property.variant || "rectangular"}
              width={property.width || "100%"}
              height={property.height || "100px"}
              sx={{ mb: 1 }}
            />
          ))}
        </Card>
      </Box>
    </>
  );
}

CardSkeleton.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.string,
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // width can be number or string
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // height can be number or string
    })
  ).isRequired,
  sx: PropTypes.object,
};
export default CardSkeleton;
