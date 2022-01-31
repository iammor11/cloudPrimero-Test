import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Posts from "./Posts";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("name") === null &&
      localStorage.getItem("email") === null &&
      localStorage.getItem("gender") === null
    ) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Header />
      <Posts />
    </>
  );
};
export default Home;
