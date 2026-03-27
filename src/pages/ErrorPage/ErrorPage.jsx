import { Link } from "react-router-dom";
import errorImg from "../../assets/error-404.png";
const ErrorPage = () => {
  return (
    <div>
       <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white border border-slate-200 shadow-sm min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-5xl border border-dashed border-sky-300 px-6 py-12 md:px-10 text-center">
          <img
            src={errorImg}
            alt="App not found"
            className="w-64 md:w-80 mx-auto mb-6 object-contain"
          />

          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 uppercase">
            Opps, Page Not Found
          </h1>

          <p className="text-slate-500 text-sm md:text-lg mb-6 max-w-2xl mx-auto">
            The page you are looking for is not available.
          </p>

          <Link to="/" className="btn btn-primary px-8">
            Go Back!
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;