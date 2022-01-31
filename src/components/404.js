import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <h1 id="loginHeading">CLOUD PRIMERO</h1>
      <h1 style={{ textAlign: "center" }}>Not Found!</h1>
      <h3
        style={{
          color: "#442445",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Go to home
      </h3>
    </>
  );
};
export default NotFound;
