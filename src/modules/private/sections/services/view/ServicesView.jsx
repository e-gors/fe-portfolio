import React from "react";
import Http from "../../../../../utils/Http";
import ServicesTable from "../components/services-table";
// ----------------------------------------------------------------------

//custom columns for each of the table (user table)
const columns = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "role", label: "Role" },
  { id: "isVerified", label: "Verified", align: "center" },
  { id: "status", label: "Status" },
  { id: "" },
];

//custom filters for each of the table (user table)
const filterItems = [
  {
    type: "dropdown",
    name: "role",
    label: "Role",
    options: ["Customer", "Service Provider"],
    operators: ["eq"],
  },
  {
    type: "dropdown",
    name: "isVerified",
    label: "Verified",
    options: [
      {
        name: "Yes",
        value: true,
      },
      {
        name: "No",
        value: false,
      },
    ],
    operators: ["eq"],
  },
  {
    type: "dropdown",
    name: "status",
    label: "Status",
    options: [
      {
        name: "Active",
        value: "active",
      },
      {
        name: "Inactive",
        value: "inactive",
      },
      {
        name: "Banned",
        value: "banned",
      },
      {
        name: "Deleted",
        value: "deleted",
      },
    ],
    operators: ["eq"],
  },
];

export default function ServicesView() {
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [userList, setUserList] = React.useState({
    data: [],
    meta: {},
  });
  const [filters, setFilters] = React.useState({
    limit: 10,
    search: "",
    role: "",
    isVerified: "",
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

    // Http.get("/users", {
    //   params: {
    //     ...queryParams,
    //     ...params,
    //   },
    // }).then((res) => {
    //   if (res.data.data) {
    //     setUserList({
    //       data: res.data.data,
    //       meta: res.data.meta,
    //     });
    //   }
    //   setLoading(false);
    // });
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
      role: "",
      isVerified: "",
      status: "",
    }));
  };

  return (
    <>
      <ServicesTable
        withPagination
        loading={loading}
        data={userList.data}
        rowsPerPage={filters.limit}
        count={userList.meta.total || 0}
        page={userList.meta.current_page - 1 || 0}
        onChangePage={handleChangePage}
        onRowsChangePage={handleRowChange}
        columns={columns}
        placeholder="Search Users..."
        filterItems={filterItems}
        filterValues={filters}
        onMultipleFilters={handleFilterChange}
        onClearFilters={handleClearFilters}
        customPage={page}
      />
    </>
  );
}
