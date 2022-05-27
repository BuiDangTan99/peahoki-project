import { Button, Form, Input, notification } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListPreferences from "../preferences/list";

const Index = (props) => {
  const { handleRegisterSuccess } = props;

  const [preference, setPreference] = useState();

  const getPreference = (pref) => {
    setPreference(pref);
  };
  
  useEffect(() => {
   
  }, [preference]);


  const onFinish = (values, err) => {
    const payload = {
      userName: values.username,
      preference: preference,
    };

    localStorage.setItem("user-peahoki", JSON.stringify(payload));

    if (localStorage.getItem("user-peahoki")) {
      notification["success"]({
        message: "Register",
        description: "Register success",
      });
      handleRegisterSuccess(localStorage.getItem("user-peahoki"));
    } else {
      notification["error"]({
        message: "Register",
        description: "Register failed",
      });
    }
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <ListPreferences onGetPreference={getPreference}/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Index;
