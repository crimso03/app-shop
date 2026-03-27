import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <p className="py-4 text-lg">Oops! Page not found</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;