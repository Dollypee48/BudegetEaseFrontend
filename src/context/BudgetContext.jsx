import { createContext, useState, useEffect, useContext } from "react";
import {
  getTransactions,
  addTransaction as addTxn,
  deleteTransaction as delTxn,
  clearAllTransactions,
} from "../services/transactionService";
import { AuthContext } from "./AuthContext";

export const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    if (user) {
      getTransactions()
        .then((data) => setTransactions(Array.isArray(data) ? data : []))
        .catch(console.error);
    } else {
      // Clear transactions when user logs out or no user
      setTransactions([]);
    }
  }, [user]);

  useEffect(() => {
    if (!Array.isArray(transactions)) {
      setIncome(0);
      setExpenses(0);
      return;
    }

    const inc = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, t) => acc + Number(t.amount), 0);

    const exp = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => acc + Number(t.amount), 0);

    setIncome(inc);
    setExpenses(exp);
  }, [transactions]);

  const addTransaction = async (txn) => {
    const newTxn = await addTxn(txn);
    setTransactions((prev) => [newTxn, ...prev]);
  };

  const deleteTransaction = async (id) => {
    await delTxn(id);
    setTransactions((prev) => prev.filter((t) => t._id !== id));
  };

  const clearTransactions = async () => {
    await clearAllTransactions();
    setTransactions([]);
  };

  return (
    <BudgetContext.Provider
      value={{
        transactions,
        income,
        expenses,
        addTransaction,
        deleteTransaction,
        clearTransactions,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
