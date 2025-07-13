import { useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function TransactionForm() {
  const { addTransaction } = useContext(BudgetContext);

  const [form, setForm] = useState({
    type: "income",
    category: "",
    amount: "",
    date: "",
    description: "",
  });

  const incomeCategories = ["Salary", "Freelance", "Gift", "Investment", "Others"];
  const expenseCategories = [
    "Food",
    "Transport",
    "Health",
    "Utilities",
    "Shopping",
    "Education",
    "Entertainment",
    "Others",
  ];

  const categories = form.type === "income" ? incomeCategories : expenseCategories;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.category || !form.amount || !form.date) {
      alert("Please fill in all required fields.");
      return;
    }

    addTransaction(form);
    setForm({
      type: "income",
      category: "",
      amount: "",
      date: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4 mb-6"
    >
      <h2 className="text-lg font-semibold text-gray-800">Add Transaction</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Amount (₦)</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. 1000"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={3}
          placeholder="Optional: Add notes or details"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
      >
        Add Transaction
      </button>
    </form>
  );
}
