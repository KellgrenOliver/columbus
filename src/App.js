import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductContextProvider from "./contexts/ProductContext";
import Homepage from "./Pages/HomePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2,
      cacheTime: 1000 * 60 * 60 * 4,
    },
  },
});
const App = () => {
  return (
    <div id="app">
      <Router>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          <ProductContextProvider>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
            </Routes>
          </ProductContextProvider>
        </QueryClientProvider>
      </Router>
    </div>
  );
};

export default App;
