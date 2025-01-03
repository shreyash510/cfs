import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notFound";

const App = () => (
  <Routes>
      <Route index element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
