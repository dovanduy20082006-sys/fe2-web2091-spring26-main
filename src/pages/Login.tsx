import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import toast from "react-hot-toast";

type LoginForm = {
  email: string;
  password: string;
};

function Login() {
    const { login } = useAuthStore();
    const navigate = useNavigate();
  
    const mutation = useMutation({
      mutationFn: async (data: LoginForm) => {
        const res = await axios.post("http://localhost:3000/login", data);
        return res.data;
      },
      onSuccess: (data) => {
        login(data.user, data.token);
        toast.success("Đăng nhập thành công!");
        navigate("/");
      },
      onError: () => {
        toast.error("Đăng nhập thất bại!");
      },
    });
  
    const onFinish = (values: any) => {
      mutation.mutate({
        email: values.email,
        password: values.password,
      });
    };
  
    return (
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email chưa đúng định dạng" },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu" },
            { min: 6, message: "Password có ít nhất 6 ký tự" },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={mutation.isPending}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    );
  }

export default Login;