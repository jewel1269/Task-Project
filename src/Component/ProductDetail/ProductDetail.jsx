import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions } from 'antd';
import { useGetProductByIdQuery } from '../../productsApi/productsApi';

const ProductDetail = () => {
    const { id } = useParams();
    
    const { data, error, isLoading } = useGetProductByIdQuery(id);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;
  
    return (
      <Descriptions title="Product Details" bordered>
        <Descriptions.Item label="Title">{data?.title}</Descriptions.Item>
        <Descriptions.Item label="Description">{data?.description}</Descriptions.Item>
        <Descriptions.Item label="Price">{data?.price}</Descriptions.Item>
        <Descriptions.Item label="Category">{data?.category}</Descriptions.Item>
        {/* Add other relevant fields */}
      </Descriptions>
    );
  };
  
  export default ProductDetail;