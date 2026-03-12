import { Layout, Form, Input, Button, Table, Modal } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

function Lab1() {

  const [open, setOpen] = useState(false);

  const [users, setUsers] = useState([
    { key: 1, name: "Nguyen Van A", email: "a@gmail.com", role: "Admin" }
  ]);

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" }
  ];

  const onFinish = (values:any) => {
    setUsers([...users,{ key: Date.now(), ...values, role:"User"}]);
  };

  const addUser = (values:any) => {
    setUsers([...users,{ key: Date.now(), ...values }]);
    setOpen(false);
  };

  return (
    <Layout style={{minHeight:"100vh"}}>

      <Sider style={{color:"white",padding:20}}>
        Sidebar
      </Sider>

      <Layout>

        <Header style={{color:"white"}}>
          Dashboard
        </Header>

        <Content style={{padding:20}}>

          <h3>Register</h3>

          <Form onFinish={onFinish} style={{maxWidth:300}}>

            <Form.Item name="name" rules={[{required:true}]}>
              <Input placeholder="Name"/>
            </Form.Item>

            <Form.Item name="email" rules={[{required:true}]}>
              <Input placeholder="Email"/>
            </Form.Item>

            <Form.Item name="password" rules={[{required:true}]}>
              <Input.Password placeholder="Password"/>
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>

          </Form>

          <br/>

          <Button type="primary" onClick={()=>setOpen(true)}>
            Add User
          </Button>

          <br/><br/>

          <Table columns={columns} dataSource={users}/>

          <Modal open={open} footer={null} onCancel={()=>setOpen(false)}>

            <Form onFinish={addUser}>

              <Form.Item name="name" rules={[{required:true}]}>
                <Input placeholder="Name"/>
              </Form.Item>

              <Form.Item name="email" rules={[{required:true}]}>
                <Input placeholder="Email"/>
              </Form.Item>

              <Form.Item name="role" rules={[{required:true}]}>
                <Input placeholder="Role"/>
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Add
              </Button>

            </Form>

          </Modal>

        </Content>

      </Layout>

    </Layout>
  );
}

export default Lab1;