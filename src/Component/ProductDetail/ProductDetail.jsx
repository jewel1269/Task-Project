import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions } from 'antd';
import { useGetProductByIdQuery } from '../../productsApi/productsApi';

const ProductDetail = () => {
  const { id } = useParams(); 
  console.log(id);

  const { data, error, isLoading } = useGetProductByIdQuery(id); 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  return (
    <Descriptions className='font-bold text-2xl' title="Product Details" bordered>
      <Descriptions.Item label="Title">{data?.title}</Descriptions.Item> <br />
      <Descriptions.Item label="Description">{data?.description}</Descriptions.Item> <br />
      <Descriptions.Item label="Price">{data?.price}</Descriptions.Item> <br />
      <Descriptions.Item label="Category">{data?.category}</Descriptions.Item> <br />
      {/* Add other relevant fields */}
    </Descriptions>
  );
};

export default ProductDetail;
