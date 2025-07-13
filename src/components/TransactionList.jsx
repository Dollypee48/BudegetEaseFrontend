
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useContext(BudgetContext);


  console.log("transactions:", transactions);

  const isTransactionsArray = Array.isArray(transactions);

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        All Transactions
      </h2>

      {!isTransactionsArray || transactions.length === 0 ? (
        <p className="text-gray-500">No transactions recorded yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse table-auto">
            <thead>
              <tr className="bg-purple-100 text-left">
                <th className="p-2 whitespace-nowrap">Date</th>
                <th className="p-2 whitespace-nowrap">Type</th>
                <th className="p-2 whitespace-nowrap">Category</th>
                <th className="p-2 whitespace-nowrap">Amount</th>
                <th className="p-2 whitespace-nowrap">Description</th>
                <th className="p-2 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr
                  key={txn._id || index}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-2">
                    {txn.date
                      ? new Date(txn.date).toLocaleDateString()
                      : "-"}
                  </td>
                  <td
                    className={`p-2 capitalize font-medium ${
                      txn.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {txn.type}
                  </td>
                  <td className="p-2">{txn.category}</td>
                  <td className="p-2">
                    ₦{Number(txn.amount || 0).toLocaleString()}
                  </td>
                  <td className="p-2 break-words max-w-xs text-gray-600 italic">
                    {txn.description || "-"}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => deleteTransaction(txn._id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
