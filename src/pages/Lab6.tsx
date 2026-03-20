
import { useQuery } from "@tanstack/react-query";
import { Form } from "antd";
import Input from "antd/es/input/Input";
import { Button } from "antd/es/radio";
import { axios } from 'axios';
import { useEffect } from "react";

export function EditStory(){
    const {data} = useQuery({
        queryFn: async()=>{
            const res = await axios.get(` http://localhost:3000/stories/1`);
            return res.data;
        },
        queryKey: ["story"],
    });
    const [form] = Form.useForm();
    useEffect(()=>{
        if(data){
            form.setFieldValue(data);
        }
    }.[data]);
    return (
        <Form>
            <Form.Item label="ten truyen" name="title">
                <Input/>
            </Form.Item>
            <Button htmlType="submit"></Button>  
        </Form>
    )
}