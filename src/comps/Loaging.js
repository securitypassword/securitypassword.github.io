import React from "react";
import ReactLoading from "react-loading";
import "./loading.css";
  
export default function Loading() {
  return (
    <div className="container">
        <div className="center">
            <ReactLoading type="bars" color="#8c83c5" height={100} width={50} />
        </div>
    </div>
  );
}