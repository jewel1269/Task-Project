import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../productsApi/productsApi';

const ProductList = () => {
    const { data, error, isLoading } = useGetProductsQuery({ limit: 10, skip: 0 });
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;
  
    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Button>
            <Link to={`/details/${record.id}`}>View Details</Link>
          </Button>
        ),
      },
    ];
  
    return (
      <Table columns={columns} dataSource={data?.products} pagination={{ pageSize: 10 }} rowKey="id" />
    );
  };
  
  export default ProductList;