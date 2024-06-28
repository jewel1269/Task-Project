import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, Select, message } from 'antd';
import { useGetCategoriesQuery, useGetProductByIdQuery, useUpdateProductMutation } from '../../productsApi/productsApi';

const EditProduct = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id);
//   const { data: categories } = useGetCategoriesQuery();
  const [updateProduct] = useUpdateProductMutation();
const categories= ['Beauty', 'fragrances', 'Food', 'Sports']
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
    <div className="flex justify-center   items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8  rounded-lg shadow-md w-full max-w-md">
        
          <p className="px-4 py-2 text-2xl w-full font-bold text-teal-600 border-b-2 border-teal-600">Edit Product</p>
   
        <Form
          form={form}
          initialValues={data}
          onFinish={onFinish}
          layout="vertical"
          style={{ maxWidth: '600px', margin: 'auto', width: '400px', border: '1px solid gray', padding: '20px'}} // Centered and constrained form width
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input placeholder="Enter product title" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter the description' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter product description" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: 'Please enter the price' },
              { type: 'number', min: 0, message: 'Price must be a positive number' },
            ]}
          >
            <Input type="number" placeholder="Enter product price" />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please select a category' }]}
          >
            <Select placeholder="Select a category">
              {categories?.map((category) => (
                <Select.Option key={category} value={category}>
                  {category}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditProduct;
