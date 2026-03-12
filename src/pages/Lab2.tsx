import { Table, Button, Tag } from "antd";

function Lab2() {

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      render: () => (
        <>
          <Button type="primary" style={{ marginRight: 8 }}>
            Edit
          </Button>

          <Button danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      id: 1,
      name: "Nguyen Van A",
      email: "a@gmail.com",
      status: "active",
    },
    {
      key: 2,
      id: 2,
      name: "Tran Thi B",
      email: "b@gmail.com",
      status: "inactive",
    },
    {
      key: 3,
      id: 3,
      name: "Le Van C",
      email: "c@gmail.com",
      status: "active",
    },
    {
      key: 4,
      id: 4,
      name: "Pham Van D",
      email: "d@gmail.com",
      status: "inactive",
    },
    {
      key: 5,
      id: 5,
      name: "Hoang Van E",
      email: "e@gmail.com",
      status: "active",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>User Management</h2>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 3 }}
      />
    </div>
  );
}

export default Lab2;