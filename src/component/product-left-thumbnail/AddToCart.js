import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState  , useEffect} from 'react';

function AddToCart() {
  const [productDetails, setProductDetails]=useState();
  const [data , setData]=useState();

  
  
   const getHomeData = async () => {

    const productid=localStorage.getItem('pro_id')
    const userid=localStorage.getItem('_id')
    

         const options ={
         headers: {
             "content-type" : "application/json; charset=utf-8",
             "Access-Control-Allow-Origin" : '*'
         }
     }
        const data = JSON.stringify({
           "productId" :productid,
           "userId": userid,
           "delevery_charge": "99",
           "total_price": "100",
          "color": "color",
           "size": "double",
           "qty": "1",
           "duration": "3",  


 });
 //console.log("check for productid",productid)
 //console.log("check for userid",userid)

         await axios.post("http://103.104.74.215:3018/krazeal/api/add_cart",data,options).then(res => {
          setProductDetails(res.data.data);
     }).catch(err =>{
         })
     }
  return (
    <div>
      <button
        className="primary__btn quickview__cart--btn"
        type="submit"
        onClick={getHomeData}
      >
        <Link to="/cart" class="btn btn-md bg-danger cart-button text-white w-90">Add to Cart</Link>
      </button>
    </div>
  );
}

export default AddToCart;