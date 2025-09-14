import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 text-center px-4">
      <AlertTriangle className="text-red-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Something went wrong</h1>
      <p className="text-gray-600 mb-6">
        Sorry, an unexpected error has occurred. Please try again later.
      </p>
      <Link
        to="/"
        className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default Error