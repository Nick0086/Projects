import React, { useEffect, useState } from 'react'
import SingleProduct from '../Components/SingleProduct'
import Container from '../Components/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailPage() {

  const[singleProduct,setSingleProduct] = useState();

  const { id } = useParams();
  console.log("id", id)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => setSingleProduct(res.data))
      .catch(error => console.log("error in fetch products : ", error));
  }, [id])

  return (
    <div className='bg-slate-100 min-h-[90vh] flex justify-center items-center'>
      <Container>
        {
          singleProduct && <SingleProduct item={singleProduct} />
        }
      </Container>
    </div>
  )
}

export default ProductDetailPage;