import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AddBlog from "./Components/AddBlog";
import Header from "./Components/Header";
import ReadMore from "./Components/ReadMore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/AddBlog" element={<AddBlog/>}/>
          <Route path="/ReadMore" element={<ReadMore/>}/>
          <Route path="/" element={<App/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
