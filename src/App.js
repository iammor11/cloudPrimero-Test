import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AddPost from "./components/AddPost";
import NotFound from "./components/404";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
