// @packages
import { Route, Routes } from "react-router-dom";

// @own
import Event from "pages/Event";
import Subscribe from "pages/Subscribe";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}

export default Router;
