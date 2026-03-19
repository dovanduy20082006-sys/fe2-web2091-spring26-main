import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, Checkbox, Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

// ✅ Type thay cho any
interface StoryFormValues {
  title: string;
  description?: string;
  active: boolean;
  categoryId?: number;
}

export default function StoryForm() {
  // ✅ GET categories (Bài 4)
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });

  // ✅ Mutation
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (values: StoryFormValues) => {
      await axios.post("http://localhost:3000/stories", values);
    },
    onSuccess: () => {
      toast.success("Story created successfully!");
    },
    onError: () => {
      toast.error("Failed to create story.");
    },
  });

  const onFinish = (values: StoryFormValues) => {
    mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      
      {/* Title */}
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Required!" }]}
      >
        <Input placeholder="title" />
      </Form.Item>

      {/* Description */}
      <Form.Item label="Description" name="description">
        <Input.TextArea placeholder="description" />
      </Form.Item>

      {/* Active */}
      <Form.Item name="active" valuePropName="checked">
        <Checkbox>Active</Checkbox>
      </Form.Item>

      {/* Select category (Bài 4 nâng cao) */}
      <Form.Item label="Category" name="categoryId">
        <Select placeholder="Select category">
          {categories?.map((c: any) => (
            <Select.Option key={c.id} value={c.id}>
              {c.title}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      {/* Submit */}
      <Button htmlType="submit" loading={isPending} type="primary">
        Submit
      </Button>

      {/* Success message */}
      {isSuccess && (
        <div style={{ color: "green", marginTop: 10 }}>
          Story created successfully!
        </div>
      )}
    </Form>
  );
}