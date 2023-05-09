
import {useNavigate } from 'react-router-dom';
import React,{ useState, useEffect }  from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// import Footer from '../common/Footer'
// import Header from '../common/Header'
import { useSelector, useDispatch } from "react-redux";
import { decNumber, incNumber } from '../redux/actions/index';
import Header2 from '../common/Header2';
const Cart = () => {
  const [productDetails, setProductDetails]=useState([]);
  const [data , setData]=useState();
  const [count , setCount]=useState(1)

  useEffect(()=>{
    getHomeData();
  },[]);


  const getHomeData = async () => {
    const userid=localStorage.getItem('_id')
    //console.log("check for userid",userid)
         const options ={
         headers: {
             "content-type" : "application/json; charset=utf-8",
             "Access-Control-Allow-Origin" : '*'
         }
     }
        const data = JSON.stringify({
            "userId": userid
            
 
          });
          

         await axios.post("http://103.104.74.215:3018/krazeal/api/cart_list",data,options).then(res => {
          setProductDetails(res.data.data);
         console.log("data of response",res.data.data)
     }).catch(err =>{
         })
     }

    
  //  const clearCart = () => setProductDetails([id]);

  return (
    <>
   
       <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-5 g-3">
            <div className="col-xxl-9">
              <div className="cart-table">
              {productDetails.map((list) => {
                        return(
                <div className="table-responsive-xl" >
                  <table className="table">
                    <tbody>
                      <tr className="product-box-contain">
                        <td className="product-detail">
                          <div className="product border-0">
                            <a href="/product-left-thumbnail" className="product-image">
                              <img src={"http://103.104.74.215:3018/uploads/"+list.productId.images[0]} className="img-fluid blur-up lazyloaded" alt="" />
                            </a>
                            <div className="product-details">
                              <ul>
                                <li className="name">
                                <h4 className="table-title text-content">Price</h4>
                                  <a href="/product-left-thumbnail">{list.productId.product_name}</a>
                                  
                                </li>
                                {/* <li className="text-content"><span className="text-title">Sold
                                    By:</span> Fresho</li> */}
                                {/* <li className="text-content"><span className="text-title">Color:</span>  {list.productId.color[0]}</li> */}
                                {/* <li>
                                  <h5 className="text-content d-inline-block">Price :</h5>
                                  <span>₹35.10</span>
                                  <span className="text-content">₹45.68</span>
                                </li> */}
                                {/* <li>
                                  <h5 className="saving theme-color">Saving : $20.68</h5>
                                </li> */}
                                {/* <li className="quantity-price-box">
                                  <div className="cart_qty">
                                    <div className="input-group">
                                      <button  type="button" className="btn qty-left-minus" data-type="minus" data-field>
                                        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1={5} y1={12} x2={19} y2={12} /></svg>
                                      </button>
                                      <input className="form-control input-number qty-input" type="text" name="quantity" Value={0} />
                                      <button  type="button" className="btn qty-right-plus" data-type="plus" data-field>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <h5>Total: ₹35.10</h5>
                                </li> */}
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td className="price">
                          
                          <h5>₹{list.productId.sale_price} <del className="text-content"></del></h5>
                          {/* <h6 className="theme-color">You Save : ₹{list.productId.discount_price} </h6> */}
                        </td>
                        <td className="quantity">
                          <h4 className="table-title text-content">Qty</h4>
                          <div className="quantity-price">
                            <div className="cart_qty">
                              <div className="input-group">
                                                                {/* <button  onClick={() => setCounter(counter - 1)} type="button" className="btn qty-left-minus" data-type="minus" data-field>
                                        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1={5} y1={12} x2={19} y2={12} /></svg>
                                      </button>
                                      <p>{counter}</p>
                                      <input className="form-control input-number qty-input" type="text" name="quantity" Value={0} />
                                      <button  onClick={() => setCounter(counter + 1)}  type="button" className="btn qty-right-plus" data-type="plus" data-field>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
                                      </button> */}
                                  
                                  <button
                                       onClick={() => {
                                        list.productId.qty > 1 ? setCount(count - 1) : setCount(1);
                                        }}
                                          >
                                            -
                                 </button>
                                 {(list.productId.qty = count)}
                                 <button onClick={() => setCount(count + 1)}>+</button>
                                 

                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>₹{list.productId.sale_price * list.productId.qty}</h5>
                        </td>
                        <td className="save-remove">
                          <h4 className="table-title text-content">Action</h4>
                          {/* <a className="save notifi-wishlist" href="javascript:void(0)">Save for later</a> */}
                          <a className="remove close_button" onClick={(()=>localStorage.setItem("userId",productDetails._id))}>Remove</a>
                       
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              )})}
              </div>
            </div>
            <div className="col-xxl-3">
              <div className="summery-box p-sticky">
                <div className="summery-header">
                  <h3>Cart Total</h3>
                </div>
                <div className="summery-contain">
                  <div className="coupon-cart">
                    <h6 className="text-content mb-2">Coupon Apply</h6>
                    <div className="mb-3 coupon-box input-group">
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Coupon Code Here..." />
                      <button className="btn-apply">Apply</button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <h4>Subtotal</h4>
                      <h4 className="price">₹125.65</h4>
                    </li>
                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price">(-) 0.00</h4>
                    </li>
                    <li className="align-items-start">
                      <h4>Shipping</h4>
                      <h4 className="price text-end">₹6.90</h4>
                    </li>
                  </ul>
                </div>
                <ul className="summery-total">
                  <li className="list-total border-top-0">
                    <h4>Total </h4>
                    <h4 className="price theme-color">₹{productDetails?.price}</h4>
                  </li>
                </ul>
                <div className="button-group cart-button">
                  <ul>
                    <li>
                      <button  onClick={(()=>localStorage.setItem("userId",productDetails._id  ))} className="btn btn-animation proceed-btn fw-bold"><a href='/check-out'>Process To Checkout</a></button>
                    </li>
                    <li>
                      <button onclick="location.href = '/';" className="btn btn-light shopping-button text-dark">
                        <i className="fa fa-arrow-left-long" /><a href='/'>Return To Shopping</a></button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  )
}

export default Cart
