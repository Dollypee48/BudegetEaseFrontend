
import { useContext } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Summary from "../components/Summary";
import PDFDownloader from "../components/PDFDownloader";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 0);
  };


  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          BudgetEase
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

     
      <TransactionForm />

      <Summary />
      <div className="mb-6">
        <PDFDownloader />
      </div>
      <TransactionList />
    </div>
  );
}
