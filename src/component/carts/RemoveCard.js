import React from 'react'

const RemoveCard = () => {
    const [productDetails, setProductDetails]=useState();
    const [data , setData]=useState();
  
    
    
     const getHomeData = async () => {
  
      const productid=localStorage.getItem('pro_id')
      const id=localStorage.getItem('_id')
      
  
           const options ={
           headers: {
               "content-type" : "application/json; charset=utf-8",
               "Access-Control-Allow-Origin" : '*'
           }
       }
          const data = JSON.stringify({
             "productId" :productid,
             
           "cartId":id
  
  
   });
   //console.log("check for productid",productid)
   //console.log("check for userid",userid)
  
           await axios.post("http://103.104.74.215:3018/krazeal/api/cart_remove",data,options).then(res => {
            setProductDetails(res.data.data);
       }).catch(err =>{
           })
       }
  return (
    <>
      <a className="remove close_button"  onClick={getHomeData}>Remove</a> 
    </>
  )
}

export default RemoveCard
