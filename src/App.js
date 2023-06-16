import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import SearchParams from "./SearchParams";
import Header from "./Header";
import HomePage from "./HomePage";
import "./App.css"
import "./Resources.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            {/* <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} /> */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
