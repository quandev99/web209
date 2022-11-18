import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/product";
import ProductEdit from "./components/product-edit";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutWebsite from "./layouts/LayoutWebsite";

function App() {
    return (
        <div className="App">
            <header>
                <Link to="/admin">Dashboard</Link> <br />
                <Link to="/admin/products">Products</Link>
                <br />
                <Link to="/admin/products/add">Add SP</Link>
                <br />
                <Link to="/admin/products/:id/edit">Edit</Link>
            </header>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<h1>Home Page</h1>} />
                    <Route path="about" element={<h1>About Page</h1>} />
                </Route>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<h1>Dashboard</h1>} />
                    <Route path="products" element={<Product />} />
                    <Route path="products/add" element={<h1>Product Add</h1>} />
                    <Route path="products/:id/edit" element={<ProductEdit />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
