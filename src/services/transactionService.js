import axios from "axios";

const API = "https://budget-ease-backend.vercel.app";

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token || "";
};

const authHeader = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const getTransactions = async () => {
  try {
    const res = await axios.get(API, authHeader());
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const addTransaction = async (txn) => {
  try {
    const res = await axios.post(API, txn, authHeader());
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteTransaction = async (id) => {
  try {
    const res = await axios.delete(`${API}/${id}`, authHeader());
    return res.data;
  } catch (error) {
    handleError(error);
  }
};


export const clearAllTransactions = async () => {
  try {
    const res = await axios.delete(API, authHeader());
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  const msg =
    error.response?.data?.message ||
    error.response?.data?.error ||
    error.message ||
    "An unexpected error occurred";
  throw new Error(msg);
};
