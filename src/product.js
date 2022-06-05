import Card from "./components/Card";
import Loader from "./components/loader";
import { apiConfig } from "./components/apiConfig";
import './sidebar.css'
import React, { useState, useEffect } from "react";
const initialState = [];

export default function Product() {

    const [productData, setproductData] = useState(initialState)
    
    useEffect(() => {
        apiConfig.get("products").then((prod) => {
            setproductData(prod.data)
        })
    }, [productData]);

    const filterFun = (val)=>{
        
        const filterData = productData.filter((e) => {
            return e.category === val;
        });
        setproductData(filterData)
    }



    

    return (
        <>
            <div className="container">
                <h1 className="text-center py-3">Product</h1>
                <div className="row">
                    <div className="col-md-3">
                        <div className="filter-card">
                            <div className="sidebar-filter menu">
                                <div>
                                    <div className="Categories">
                                        <p>Categories</p>
                                    </div>

                                    <div className="Categories-radio">
                                        <input type="radio" name="flt_category" id="alll" onChange={()=>{  }}/>
                                            <label htmlFor="alll">all</label>
                                    </div>
                                    <div className="Categories-radio">
                                        <input type="radio" name="flt_category" id="jewelery" onChange={()=>{filterFun("jewelery")}}/>
                                            <label htmlFor="jewelery">Jewelery</label>
                                    </div>
                                    <div className="Categories-radio">
                                        <input type="radio" name="flt_category" id="clothing" onChange={()=>{filterFun("men's clothing")}} />
                                            <label htmlFor="clothing">men's clothing</label>
                                    </div>
                                    <div className="Categories-radio">
                                        <input type="radio" name="flt_category" id="wclothing" onChange={()=>{filterFun("women's clothing")}}/>
                                            <label htmlFor="wclothing">women's clothing</label>
                                    </div>
                                    <div className="Categories-radio">
                                        <input type="radio" name="flt_category" id="electronics" onChange={()=>{filterFun("electronics")}} />
                                            <label htmlFor="electronics">Electronics</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {productData.length <= 0 ? <Loader /> : productData.map((x) => {
                                return <Card key={x.id} data={x} />
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}