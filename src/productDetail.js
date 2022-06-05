import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { apiConfig } from './components/apiConfig';
import './productdetails.css'



function ProductDetail() {
    const [prodetail, setprodetail] = useState({})
    const param =  useParams() 


    useEffect(() => {
        apiConfig.get(`/products/${param.id}`)
        .then((prod) => {
           setprodetail(prod.data)
        }).catch(err => {
            console.error("EEERrrrrrrrrrrrrr")
        })
    }, [])

    return (
        <>
            <h1 className="text-center py-4">Product Details Page</h1>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="pro-img">
                            <img src={prodetail.image} alt="Img"  />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="pro-text py-2">
                            <p><strong>{prodetail.title} </strong></p>
                            <p>Price : {prodetail.price}</p>
                            <p> {prodetail.description}</p>
                            <p>Categories : {prodetail.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;