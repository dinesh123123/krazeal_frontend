import {useNavigate } from 'react-router-dom';
import React,{ useState, useEffect }  from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Slider from "react-slick";

const Category = () => {
  const [loader, setLoading] =useState(false);
  const [list, setList]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getHomeData();
  },[]);

  const getHomeData = async () => {
    setLoading(true);
    const options ={
        headers: {
            "content-type" : "application/json; charset=utf-8",
            "Access-Control-Allow-Origin" : '*'
        }

       
    }
   
    const data = JSON.stringify({
        
     });

    

    await axios.get(`http://103.104.74.215:3018/krazeal/api/category_list`,data,options).then(res => {
    
    if(res.data.result!="false"){
      localStorage.setItem("token", res.data.token);
        setLoading(false)
        
        toast.success(res.data.msg);
        setList(res.data.data);
       } else{
        setLoading(false)

        toast.error(res.data.msg);
       }
    }).catch(err =>{
        setLoading(false)
    })
    
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
  };
  return (
    <>
    
     <section className="category-section-3">
        <div className="container-fluid-lg">
          {/*  <div class="title">
                <h2>Shop By Categories</h2>
            </div> */}
          <div className="row">
            <div className="col-12">
            
              <div className="category-slider-1 slick-initialized slick-slider"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>
                <div className="slick-list draggable">
                <Slider {...settings} >
                {
            list.map((item) => {
              let idData = item._id[0]
                //let image= 'http://103.104.74.215:3018/uploads/'+item.image[0];
              {/* console.log("item",item) */}
               return(

            
                <div className="slick-slide slick-cloned"  onClick={(()=>localStorage.setItem("item_id",item._id ,"item.name",item.name))}  style={{width: '208px'}}   aria-hidden="true"  key={item.id}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top" >
                         <img src={"http://103.104.74.215:3018/uploads/"+item.image} className="img-fluid blur-up lazyloaded" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top" className="category-name" >
                        <h4>{item.name}</h4>
                        </a>
                      </div>
                      
                    </div>
               
                    )
            })
           }
        </Slider>
                
                {/* <div className="slick-track" style={{opacity: 1, width: '4576px', transform: 'translate3d(-832px, 0px, 0px)'}}><div className="slick-slide slick-cloned" style={{width: '208px'}} data-slick-index={-4} id aria-hidden="true" tabIndex={-1}>
                      <div className="category-box-list">
                        <div className="category-box-view">
                          <a href="/shop-top" tabIndex={-1}>
                            <img src="../assets/images/grocery/category/6.png" className="img-fluid blur-up lazyload" alt="" />
                          </a>
                        </div>
                        <a href="/shop-top" className="category-name" tabIndex={-1}>
                          <h4>Home</h4>
                        </a>
                      </div>
                    </div>
  
                    </div> */}
                    </div>
                    <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button></div>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Category
