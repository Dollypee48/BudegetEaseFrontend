import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import budgetIllustration from "../assets/budget-illustration.jpeg"; // Ensure the image exists

export default function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    } else {
      setCheckingAuth(false);
    }
  }, [user, navigate]);

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center flex flex-col-reverse lg:flex-row items-center justify-center max-w-7xl mx-auto gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 dark:text-green-400 mb-6 leading-tight">
            Master Your Money
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Simple Budget Planner helps you track your income and expenses, view real-time summaries, and generate monthly reports — all in one clean and easy interface.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-sm sm:text-base transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-green-600 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-gray-800 px-6 py-3 rounded-xl text-sm sm:text-base transition-all"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={budgetIllustration}
            alt="Budget Planning Illustration"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-12">
          Why Use Simple Budget Planner?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Track Every Expense",
              desc: "Log your daily income and expenses with categories and dates. Stay on top of your spending.",
            },
            {
              title: "View Totals Instantly",
              desc: "Get real-time summaries of your total income, expenses, and remaining balance.",
            },
            {
              title: "Export PDF Reports",
              desc: "Download monthly reports as PDFs for personal records or accountability.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-green-50 dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center py-6 mt-10">
        <p className="text-sm">© {new Date().getFullYear()} Simple Budget Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}
