import React from "react";
import Http from "../../../../../utils/Http";
import FeedbacksTable from "../components/feedbacks-table";
// ----------------------------------------------------------------------

//custom columns for each of the table (user table)
const columns = [
  { id: "profileImage", label: "Profile" },
  { id: "project", label: "Project Title" },
  { id: "message", label: "Feedback" },
  { id: "rating", label: "Rating" },
  { id: "status", label: "Status" },
  { id: "" },
];

//custom filters for each of the table (user table)
const filterItems = [
  {
    type: "dropdown",
    name: "status",
    label: "Status",
    options: [
      {
        name: "Pending",
        value: "pending",
      },
      {
        name: "Void",
        value: "void",
      },
      {
        name: "Declined",
        value: "declined",
      },
      {
        name: "Approved",
        value: "approved",
      },
    ],
    operators: ["eq"],
  },
];

export default function FeedbacksView() {
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [feedbacks, setFeedbacks] = React.useState({
    data: [],
    meta: {},
  });
  const [filters, setFilters] = React.useState({
    limit: 10,
    search: "",
    status: "",
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
    filterItems.forEach((filterItem) => {
      const key = filterItem.name;
      const operators = filterItem.operators;
      if (filters[key] !== "") {
        operators.forEach((operator) => {
          params[`${key}[${operator}]`] = filters[key];
        });
      }
    });

    if (filters.search) {
      params.search = filters.search;
    }

    params.limit = filters.limit;

    return params;
  };

  const fetchingData = (params = {}) => {
    setLoading(true);

    const queryParams = buildQueryParams(filters);

    Http.get("/feedbacks", {
      params: {
        ...queryParams,
        ...params,
      },
    }).then((res) => {
      if (res.data.data) {
        setFeedbacks({
          data: res.data.data,
          meta: res.data.meta,
        });
      }
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

  const handleClearFilters = () => {
    setPage(0);
    setFilters((prev) => ({
      ...prev,
      status: "",
    }));
  };

  return (
    <>
      <FeedbacksTable
        withPagination
        loading={loading}
        data={feedbacks.data}
        rowsPerPage={filters.limit}
        count={feedbacks.meta.total || 0}
        page={feedbacks.meta.current_page - 1 || 0}
        onChangePage={handleChangePage}
        onRowsChangePage={handleRowChange}
        columns={columns}
        placeholder="Search Feedbacks..."
        filterItems={filterItems}
        filterValues={filters}
        onMultipleFilters={handleFilterChange}
        onClearFilters={handleClearFilters}
        customPage={page}
      />
    </>
  );
}
