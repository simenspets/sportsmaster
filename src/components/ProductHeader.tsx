
import { Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductHeader = () => {
  return (
    <header className="w-full py-4 px-6 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-center">
            <img
              src="https://sportsmaster.no/media/athlete2/default/sportsmaster_logo.png"
              alt="Sportsmaster"
              className="h-12"
            />
          </a>
          <div className="relative flex items-center">
            <div className="relative flex items-center bg-gray-100 rounded-lg p-2">
              <input
                type="text"
                placeholder="Søk etter produkter..."
                className="bg-transparent border-none outline-none w-[400px] px-4"
              />
              <div className="flex items-center space-x-4 px-4">
                <div className="flex flex-col items-center">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex flex-col items-center">
                  <Sparkles className="h-5 w-5 text-gray-500" />
                  <span className="text-xs text-gray-500 mt-1">KI-søk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-blue-600 font-medium">Kundeservice</button>
          <div className="flex items-center space-x-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <div className="relative">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProductHeader;
