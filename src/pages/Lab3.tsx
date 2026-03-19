import { useState } from "react";
import { Form, Input, Button, Select, Divider } from "antd";

export default function Lab3() {
  const [data, setData] = useState<any>(null);

  // ===== Bài 1 =====
  const onLogin = (values: any) => {
    console.log("Login:", values);
  };

  // ===== Bài 2 =====
  const onRegister = (values: any) => {
    console.log("Register:", values);
  };

  // ===== Bài 3 =====
  const onProduct = (values: any) => {
    console.log("Product:", values);
  };

  // ===== Bài 4 =====
  const onAdvanced = (values: any) => {
    setData(values);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      
      {/* ===== BÀI 1 ===== */}
      <h2>Bài 1 - Login</h2>
      <Form layout="vertical" onFinish={onLogin}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Email bắt buộc!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password bắt buộc!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form>

      <Divider />

      {/* ===== BÀI 2 ===== */}
      <h2>Bài 2 - Register</h2>
      <Form layout="vertical" onFinish={onRegister}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Email bắt buộc!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Password bắt buộc!" },
            { min: 6, message: "Tối thiểu 6 ký tự!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Xác nhận password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Không trùng password!");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Register
        </Button>
      </Form>

      <Divider />

      {/* ===== BÀI 3 ===== */}
      <h2>Bài 3 - Product</h2>
      <Form layout="vertical" onFinish={onProduct}>
        <Form.Item label="Tên sản phẩm" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Giá" name="price">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Số lượng" name="quantity">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea />
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>

      <Divider />

      {/* ===== BÀI 4 ===== */}
      <h2>Bài 4 - Advanced</h2>
      <Form layout="vertical" onFinish={onAdvanced}>
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Select
            options={[
              { label: "Tech", value: "tech" },
              { label: "Life", value: "life" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Slug" name="slug">
          <Input />
        </Form.Item>

        <Form.Item label="Content" name="content">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Image URL" name="image">
          <Input />
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>

      {/* Hiển thị dữ liệu */}
      {data && (
        <div style={{ marginTop: 20 }}>
          <h3>Dữ liệu đã nhập:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}