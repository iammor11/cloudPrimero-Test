import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addPost } from "../redux/actions/post";

import Header from "./Header";

const AddPost = (props) => {
  const navigate = useNavigate();
  const { addPost } = props;
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    addPost({ id: Math.floor(Math.random() * 10), title, body, userId: 1 });
    navigate("/");
  };

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
      <Form
        style={{ margin: "30px 50px" }}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item label="Title">
          <Input
            required={true}
            onChange={(e) => handleChange(e, setTitle)}
            placeholder="Enter title"
          />
        </Form.Item>
        <Form.Item label="Body">
          <Input
            required={true}
            onChange={(e) => handleChange(e, setBody)}
            placeholder="Enter body"
          />
        </Form.Item>
        <Form.Item>
          <Input id="button" value="Submit" name="submit" type="submit" />
        </Form.Item>
      </Form>
    </>
  );
};
const mapStateToProps = null;
const mapDispatchToProps = { addPost };
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
