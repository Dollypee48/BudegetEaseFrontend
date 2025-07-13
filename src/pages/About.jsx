// src/components/About.jsx
export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          About BudgetEase
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
          BudgetEase is your personal finance assistant designed to help you manage your income and expenses effortlessly.
          Track your transactions, analyze spending, and maintain a healthy financial balance — all in one place.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
          Whether you’re saving for a goal or just trying to get a better grip on your money, BudgetEase empowers you to make smarter financial decisions.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Built with React and powered by a robust backend, our app is designed for simplicity, speed, and security.
        </p>
      </div>
    </div>
  );
}
