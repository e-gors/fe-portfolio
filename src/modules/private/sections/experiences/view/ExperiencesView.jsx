import React from "react";
import ExperiencesTable from "../components/experiences-table";
import publicHttp from "../../../../../utils/publicHttp";
// ----------------------------------------------------------------------

//custom columns for each of the table (user table)
const columns = [
  { id: "companyLogo", label: "Logo" },
  { id: "jobPosition", label: "Job Position" },
  { id: "companyName", label: "Company Name" },
  { id: "startDate", label: "Start Date" },
  { id: "endDate", label: "End Date" },
  { id: "" },
];

export default function ExperiencesView() {
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [experiences, setExperiences] = React.useState({
    data: [],
    meta: {},
  });
  const [filters, setFilters] = React.useState({
    limit: 10,
    search: "",
  });

  React.useEffect(() => {
    const controller = new AbortController();

    const time = setTimeout(() => {
      fetchingData();
    }, 400);

    return () => {
      clearTimeout(time);
      controller.abort();
    };
  }, [filters]); // eslint-disable-line

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const buildQueryParams = (filters) => {
    const params = {};
    if (filters.search) {
      params.search = filters.search;
    }

    params.limit = filters.limit;

    return params;
  };

  const fetchingData = (params = {}) => {
    setLoading(true);

    const queryParams = buildQueryParams(filters);

    publicHttp.get("/experiences", {
      params: {
        ...queryParams,
        ...params,
      },
    })
      .then((res) => {
        setExperiences({
          data: res.data.data,
          meta: res.data.meta,
        });
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangePage = (newPage) => {
    fetchingData({ page: newPage + 1 });
  };

  const handleRowChange = (value) => {
    fetchingData({ limit: value });
    setFilters((prev) => ({
      ...prev,
      limit: value,
    }));
  };

  return (
    <>
      <ExperiencesTable
        withPagination
        loading={loading}
        data={experiences.data}
        rowsPerPage={filters.limit}
        count={experiences.meta.total || 0}
        page={experiences.meta.current_page - 1 || 0}
        onChangePage={handleChangePage}
        onRowsChangePage={handleRowChange}
        columns={columns}
        placeholder="Search Experiences..."
        filterValues={filters}
        onMultipleFilters={handleFilterChange}
        customPage={page}
      />
    </>
  );
}
