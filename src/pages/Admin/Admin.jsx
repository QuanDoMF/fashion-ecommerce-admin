import React, { useState, useEffect } from "react";
import "./Admin.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom"
import AddProduct from "../../components/AddProduct/AddProduct";
import ListProduct from "../../components/ListProduct/ListProduct";
import OrderList from "../../components/OrderList/OrderList"
import Spinner from "../../components/Spinner/Spinner";
import { API_ROOT } from "../../utils/constants";
function Admin() {
  const [loading, setLoading] = useState('true')
  const [orderList, setOrderList] = useState([])
  const fetchOrderList = async () => {
    await fetch(`${API_ROOT}/orderlist`)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data)
      })
  }
  useEffect(() => {
    fetchOrderList()
    setLoading('false')
  }, [])
  return (
    <>
      {
        loading === 'true' ? <Spinner /> :
          (
            <div className="admin">
              <Sidebar />
              <Routes>
                <Route path='/' element={<OrderList />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/listproduct" element={<ListProduct />} />
              </Routes>
            </div>
          )
      }
    </>
  );
}

export default Admin;