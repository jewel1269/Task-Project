
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import ProductList from './Component/ProductList/ProductList'
import ProductDetail from './Component/ProductDetail/ProductDetail'
import EditProduct from './Component/EditProduct/EditProduct'

function App() {


  return (
    <Router>
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Products</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </Content>
    </Layout>
  </Router>
  )
}

export default App
