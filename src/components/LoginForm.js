import SkeletonImage from "antd/lib/skeleton/Image";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [birth, setBirth] = useState();
  const [gender, setGender] = useState();
  const [image, setImage] = useState();

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
    navigate("/");
  };

  if (
    localStorage.getItem("name") &&
    localStorage.getItem("email") &&
    localStorage.getItem("gender")
  ) {
    navigate("/");
  }
  return (
    <>
      <h1 id="loginHeading">CLOUD PRIMERO</h1>

      <form id="login" onSubmit={handleSubmit}>
        <h2>PERSONAL INFO</h2>
        <label htmlFor="name">NAME :</label>
        <br />
        <input
          type="text"
          required={true}
          placeholder="Enter Name"
          onChange={(e) => handleChange(e, setName)}
          style={{ width: "65%" }}
        />
        <br />
        <br />
        <label htmlFor="email">EMAIL :</label>
        <br />
        <input
          type="email"
          required={true}
          placeholder="Enter Name"
          onChange={(e) => handleChange(e, setEmail)}
          style={{ width: "65%" }}
        />
        <br />
        <br />
        <label htmlFor="dateOfBirth">DATE OF BIRTH :</label>
        <br />
        <input
          type="date"
          placeholder="Select your date of birth"
          onChange={(e) => handleChange(e, setBirth)}
        />
        <br />
        <br />
        <label htmlFor="gender">GENDER :</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => handleChange(e, setGender)}
        />
          <label htmlFor="male">Male</label> {" "}
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => handleChange(e, setGender)}
        />
          <label htmlFor="female">Female</label>
        <br />
        <br />
        <label htmlFor="image">PROFILE IMAGE :</label>
        <br />
        <input type="file" onChange={handleImageChange} />
        <br />
        <br />
        <input id="button" type="submit" value="Submit" />
      </form>
    </>
  );
};
export default LoginForm;
