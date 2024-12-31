import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notFound";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route
        path="study/:studyId"
        element={
          <>
            <h1>Hello world</h1>
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
