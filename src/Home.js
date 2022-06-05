import HeroSlider from './components/heroSlider';
import Loader from './components/loader';
import { apiConfig } from "./components/apiConfig";
import Card from './components/Card';
import React, { useState, useEffect } from "react";
import Product from './product';

const initialState = []

function Home() {

    const [productData, setproductData] = useState(initialState)
    useEffect(() => {
        apiConfig.get("products").then((prod) => {
            setproductData(prod.data)
        }).catch(err => {
            console.error("EEERrrrrrrrrrrrrr")
        })
    }, [])

    return (
        <>
            <HeroSlider />
            <div className='container'>
                <div className="row">
                    {productData.length <= 0 ? <Loader /> : productData.map((x) => {
                        return <Card key={x.id} data={x} />
                    })}
                </div>
            </div>

        </>
    )
}

export default Home;