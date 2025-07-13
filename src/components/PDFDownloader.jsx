import { useContext } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ Must import as function for v3+
import { BudgetContext } from "../context/BudgetContext";

export default function PDFDownloader() {
  const { transactions, income, expenses } = useContext(BudgetContext);

  const handleDownload = () => {
    const doc = new jsPDF();

    autoTable(doc, {
      head: [["Date", "Category", "Type", "Amount"]],
      body: transactions.map((txn) => [
        txn.date,
        txn.category,
        txn.type.charAt(0).toUpperCase() + txn.type.slice(1),
        `₦${Number(txn.amount).toLocaleString()}`,
      ]),
      startY: 25,
    });

    const finalY = doc.lastAutoTable?.finalY || 35;
    doc.setFontSize(14);
    doc.text(`Total Income: ₦${Number(income).toLocaleString()}`, 14, finalY + 10);
    doc.text(`Total Expenses: ₦${Number(expenses).toLocaleString()}`, 14, finalY + 17);
    doc.text(`Balance: ₦${Number(income - expenses).toLocaleString()}`, 14, finalY + 24);

    doc.save("budget-report.pdf");
  };

  return (
    <div className="text-right mt-4">
      <button
        onClick={handleDownload}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Download PDF
      </button>
    </div>
  );
}
