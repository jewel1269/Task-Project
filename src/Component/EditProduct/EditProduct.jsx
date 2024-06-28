import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, Select, message } from 'antd';
import { useGetCategoriesQuery, useGetProductByIdQuery, useUpdateProductMutation } from '../../productsApi/productsApi';

const EditProduct = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id);
    const { data: categories } = useGetCategoriesQuery();
    const [updateProduct] = useUpdateProductMutation();
  
    const [form] = Form.useForm();
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;
  
    const onFinish = async (values) => {
      try {
        await updateProduct({ id, ...values }).unwrap();
        message.success('Product updated successfully');
        console.log(values);
      } catch (err) {
        message.error('Failed to update product');
      }
    };
  
    return (
      <Form form={form} initialValues={data} onFinish={onFinish} layout="vertical">
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="price" label="Price">
          <Input type="number" />
        </Form.Item>
        <Form.Item name="category" label="Category">
          <Select>
            {categories?.map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/* Add reviews form list */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default EditProduct;
