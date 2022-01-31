import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("gender");
    navigate("/login");
  };
  return (
    <div id="header">
      <div id="logo">
        <NavLink to="/">
          <h1>CLOUD PRIMERO</h1>
        </NavLink>
      </div>

      <div id="headingName">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addPost">Post</NavLink>
          </li>
          <li>
            <NavLink className="blocked" to="/">
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink className="blocked" to="/">
              Messaging
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleLogout} to="/login">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
