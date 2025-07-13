// src/components/Summary.jsx
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function Summary() {
  const { income, expenses } = useContext(BudgetContext);
  const balance = income - expenses;

  return (
    <div className="bg-white p-6 rounded shadow mb-6 grid sm:grid-cols-3 gap-4 text-center">
      <div className="bg-green-50 p-4 rounded border border-green-200">
        <h3 className="text-sm text-green-700 font-semibold">Total Income</h3>
        <p className="text-xl font-bold text-green-600">
          ₦{income.toLocaleString()}
        </p>
      </div>

      <div className="bg-red-50 p-4 rounded border border-red-200">
        <h3 className="text-sm text-red-700 font-semibold">Total Expenses</h3>
        <p className="text-xl font-bold text-red-600">
          ₦{expenses.toLocaleString()}
        </p>
      </div>

      <div className="bg-purple-50 p-4 rounded border border-purple-200">
        <h3 className="text-sm text-purple-700 font-semibold">Balance</h3>
        <p className={`text-xl font-bold ${balance >= 0 ? "text-purple-700" : "text-red-500"}`}>
          ₦{balance.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
