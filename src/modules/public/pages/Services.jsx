import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../../../_mock/services";
import publicHttp from "../../../utils/publicHttp";
import { isEmpty } from "../../../utils/heplers";
import CardSkeleton from "../../../components/CardSkeleton";

const properties = [
  {
    variant: "circular",
    width: 60,
    height: 60,
  },
  {
    variant: "rectangular",
    width: "100%",
    height: 100,
  },
  {
    variant: "rounded",
    width: 150,
    height: 30,
  },
];

function Services() {
  const [serviceList, setServiceList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();

    fetchService(controller);
    return () => controller.abort();
  }, []);

  const fetchService = (controller) => {
    setLoading(true);
    publicHttp
      .get('services', { signal: controller.signal })
      .then((res) => {
        if (!isEmpty(res)) {
          setServiceList(res.data.data);
        }
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const servs = !isEmpty(serviceList) ? serviceList : services;

  return (
    <Box
      id="services"
      sx={{
        minHeight: `calc(100vh - 60px)`,
        height: "auto",
        overflow: "none",
        padding: { xs: "5%", md: "3% 10%" },
        backgroundColor: "white",
      }}
    >
      <Box mb={2}>
        <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
          <Typography variant="h3">My Services</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Here you will find some of my services that I can offer with my
            skills and some other technologies.
          </Typography>
        </Box>
        <Grid container rowSpacing={5} columnSpacing={2} mt={2}>
          {servs?.map((service, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              {loading ? (
                <CardSkeleton properties={properties} />
              ) : (
                <ServiceCard {...service} />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Services;
