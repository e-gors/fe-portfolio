import { Card, Skeleton } from "@mui/material";
import React from "react";

function CardSkeleton(props) {
  const { properties = [] } = props;

  return (
    <>
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
    </>
  );
}

export default CardSkeleton;
