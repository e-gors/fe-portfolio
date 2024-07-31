import Http from "../utils/Http";

export const fetchData = async (url, params = {}) => {
  let data = [];
  let error = "";

  try {
    const res = await Http.get(url, { params: { ...params } });
    if (res.data) {
      data = res.data;
    }
  } catch (err) {
    error = err.message;
  }

  return { data, error };
};
