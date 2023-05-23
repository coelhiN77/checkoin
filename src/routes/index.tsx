// routes
import { Route, Routes } from 'react-router-dom';

// pages
import { Welcome, Home } from "../pages"

// ::
const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default routes;