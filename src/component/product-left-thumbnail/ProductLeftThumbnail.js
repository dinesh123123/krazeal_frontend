import React, { useState,useEffect} from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import axios from 'axios';
import { Pagination } from "swiper";
import ProductDetail from './ProductDetail';
const ProductLeftThumbnail = () => {

  const [list, setList]=useState([]);
  useEffect(()=>{
    getHomeDa();
  },[]);
  const getHomeDa = async () => {
 const id=localStorage.getItem('item_id')
 
    const options ={
        headers: {
            "content-type" : "application/json; charset=utf-8",
            "Access-Control-Allow-Origin" : '*'
        }
    }
       const data = JSON.stringify({
        "categoryId":id,
"name":'name'
          });

        await axios.post("http://103.104.74.215:3018/krazeal/api/category_product_list",data,options).then(res => {
        setList(res.data.data);
        localStorage.setItem("token", res.data.token);
    console.log("response",res.data.data);
    }).catch(err =>{
        })
    }

    
  return (
    <>
    {/* <Header2/> */}
    
    
<ProductDetail/>
    <section className="product-list-section section-b-space">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Related Products</h2>
            <span className="title-leaf">
              <svg className="icon-width">
                <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
              </svg>
            </span>
          </div>
          <div className="row">
            <div className="col-12">
            
              
                    <Swiper
        slidesPerView={5}
        spaceBetween={1}
        loop={true}
            autoplay={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{overflow:"hidden"}}
      >
             <div className="slider-6_1 product-wrapper">
             <SwiperSlide > 
             {
              list.map((item) => {
                let idData = item._id[0]
                console.log("item", item)
                //let image= 'http://103.104.74.215:3018/uploads/'+item.image[0];
                return(
          <div className="product-box-3 wow fadeInUp" onClick={(()=>localStorage.setItem("pro_id",item._id ,"item.name",item.name))} key={item.id}>
            <div className="product-header">
              <div className="product-image">
                <a href="/product-left-thumbnail">
                <img src={"http://103.104.74.215:3018/uploads/"+item.images[0]} className="img-fluid" alt="" />
                </a>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <a href="/product-left-thumbnail">
                  <h5 className="name">{item.product_name}</h5>
                </a>
                <div className="product-rating mt-2">
                <ul className="rating">
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </li>
                      </ul>
                </div>
                <h5 className="price ">₹{item.sale_price}<del>₹{item.price}</del><p className="offers "></p> </h5>
              </div>
            </div>
          </div>
          )
              })
            }
          </SwiperSlide> 
          {/* <SwiperSlide > 
          <div className="product-box-3 wow fadeInUp" data-wow-delay="0.05s">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyload" alt="" />
                </a>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <a href="product-left-thumbnail.html">
                  <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                </a>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                  </ul>
                  <span>(4.0)</span>
                </div>
                <h5 className="price"><span className="theme-color"> ₹10.25</span> <del> ₹12.57</del>
                </h5>
              </div>
            </div>
          </div>
          </SwiperSlide> 
          <SwiperSlide > 
          <div className="product-box-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyload" alt="" />
                </a>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <a href="product-left-thumbnail.html">
                  <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                </a>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                  </ul>
                  <span>(2.4)</span>
                </div>
                <h5 className="price"><span className="theme-color"> ₹10.25</span> <del> ₹12.57</del>
                </h5>
              </div>
            </div>
          </div>
          </SwiperSlide> 
          <SwiperSlide > 
          <div className="product-box-3 wow fadeInUp" data-wow-delay="0.15s">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/cake/product/4.png" className="img-fluid blur-up lazyload" alt="" />
                </a>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <a href="product-left-thumbnail.html">
                  <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                </a>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                  </ul>
                  <span>(5.0)</span>
                </div>
                <h5 className="price"><span className="theme-color"> ₹10.25</span> <del> ₹12.57</del>
                </h5>
              </div>
            </div>
          </div>
          </SwiperSlide> 
          <SwiperSlide > 
          <div className="product-box-3 wow fadeInUp" data-wow-delay="0.2s">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/cake/product/5.png" className="img-fluid blur-up lazyload" alt="" />
                </a>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <a href="product-left-thumbnail.html">
                  <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                </a>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                  </ul>
                  <span>(3.8)</span>
                </div>
                <h5 className="price"><span className="theme-color"> ₹10.25</span> <del> ₹12.57</del>
                </h5>
              </div>
            </div>
          </div>
          </SwiperSlide> 
          <SwiperSlide > 
          <div className="product-box-3 wow fadeInUp" data-wow-delay="0.25s">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/cake/product/6.png" className="img-fluid blur-up lazyload" alt="" />
                </a>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <a href="product-left-thumbnail.html">
                  <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                </a>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                  </ul>
                  <span>(4.0)</span>
                </div>
                <h5 className="price"><span className="theme-color"> ₹10.25</span> <del> ₹12.57</del>
                </h5>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide > 
          <div className="product-box-3 wow fadeInUp" data-wow-delay="0.3s">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/cake/product/7.png" className="img-fluid" alt="" />
                </a>
              </div>
           
            </div>
            
            <div className="product-footer">
              <div className="product-detail">
                <a href="product-left-thumbnail.html">
                  <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                </a>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                  </ul>
                  <span>(3.8)</span>
                </div>
                <h5 className="price"><span className="theme-color"> ₹10.25</span> <del> ₹12.57</del>
                </h5>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide > 
          <div className="product-box-3 wow fadeInUp" data-wow-delay="0.05s">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyload" alt="" />
                </a>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <a href="product-left-thumbnail.html">
                  <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                </a>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                  </ul>
                  <span>(4.0)</span>
                </div>
                <h5 className="price"><span className="theme-color"> ₹10.25</span> <del> ₹12.57</del>
                </h5>
              </div>
            </div>
          </div>
          </SwiperSlide> 
          <SwiperSlide > 
          <div className="product-box-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyload" alt="" />
                </a>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <a href="product-left-thumbnail.html">
                  <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                </a>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                  </ul>
                  <span>(2.4)</span>
                </div>
                <h5 className="price"><span className="theme-color"> ₹10.25</span> <del> ₹12.57</del>
                </h5>
              </div>
            </div>
          </div>
          </SwiperSlide> 
          <SwiperSlide > 
          <div className="product-box-3 wow fadeInUp" data-wow-delay="0.15s">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/cake/product/4.png" className="img-fluid blur-up lazyload" alt="" />
                </a>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <a href="product-left-thumbnail.html">
                  <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                </a>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                  </ul>
                  <span>(5.0)</span>
                </div>
                <h5 className="price"><span className="theme-color"> ₹10.25</span> <del> ₹12.57</del>
                </h5>
              </div>
            </div>
          </div>
          </SwiperSlide>  */}
</div>
</Swiper>
        
             
       

            </div>
          </div>
        </div>
      </section>

      <div className="sticky-bottom-cart">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="cart-content">
                <div className="product-image">
                  <img src="../assets/images/product/category/1.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                  <div className="content">
                    <h5>Creamy Chocolate Cake</h5>
                    <h6>$32.96<del className="text-danger">$96.00</del><span>55% off</span></h6>
                  </div>
                </div>
                <div className="selection-section">
                  <div className="cart_qty qty-box product-qty m-0">
                    <div className="input-group h-100">
                      <button type="button" className="qty-left-minus" data-type="minus" data-field>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1={5} y1={12} x2={19} y2={12} /></svg>
                      </button>
                      <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={1} />
                      <button type="button" className="qty-right-plus" data-type="plus" data-field>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-btn">
                  <a className="btn theme-bg-color text-white wishlist-btn"  href="/wishlist"><i className="fa fa-bookmark" /> Wishlist</a>
                  <a className="btn theme-bg-color text-white" href="/cart"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg> Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer2/> */}
    </>
  )
}

export default ProductLeftThumbnail
