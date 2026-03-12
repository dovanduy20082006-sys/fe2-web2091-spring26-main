import { Layout, Form, Input, Button, Table, Modal, Popconfirm } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

function Lab1() {

  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  const [users, setUsers] = useState([
    {
      key: 1,
      name: "Nguyen Van A",
      email: "a@gmail.com",
      role: "Admin",
    },
  ]);

  
  const onFinish = (values: any) => {
    setUsers([...users, { key: Date.now(), ...values, role: "User" }]);
  };

  
  const addUser = (values: any) => {
    setUsers([...users, { key: Date.now(), ...values }]);
    setOpen(false);
  };

  
  const deleteUser = (key: number) => {
    const newUsers = users.filter((user) => user.key !== key);
    setUsers(newUsers);
  };

  
  const editUser = (record: any) => {
    setEditingUser(record);
    setOpen(true);
  };

 
  const updateUser = (values: any) => {
    const newUsers = users.map((user) =>
      user.key === editingUser.key ? { ...user, ...values } : user
    );

    setUsers(newUsers);
    setEditingUser(null);
    setOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => editUser(record)}
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete this user?"
            onConfirm={() => deleteUser(record.key)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ color: "white", padding: 20 }}>Sidebar</Sider>

      <Layout>
        <Header style={{ color: "white" }}>Dashboard</Header>

        <Content style={{ padding: 20 }}>
          <h3>Register</h3>

          <Form onFinish={onFinish} style={{ maxWidth: 300 }}>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item name="email" rules={[{ required: true }]}>
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>

          <br />

          <Button type="primary" onClick={() => setOpen(true)}>
            Add User
          </Button>

          <br />
          <br />

          <Table columns={columns} dataSource={users} />

          <Modal
            open={open}
            footer={null}
            onCancel={() => {
              setOpen(false);
              setEditingUser(null);
            }}
          >
            <Form
              onFinish={editingUser ? updateUser : addUser}
              initialValues={editingUser}
            >
              <Form.Item name="name" rules={[{ required: true }]}>
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item name="email" rules={[{ required: true }]}>
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item name="role" rules={[{ required: true }]}>
                <Input placeholder="Role" />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                {editingUser ? "Update" : "Add"}
              </Button>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Lab1;