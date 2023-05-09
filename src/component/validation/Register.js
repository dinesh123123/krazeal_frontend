import React , {useState} from 'react'
import Header2 from '../common/Header2'
// import Footer2 from '../common/Footer2'
import {  useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
  import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';
const Register = () => {

  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    // otp : ""
      
});
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [numberError, setNumberError] = useState("");
const [fnameError, setFnameError] = useState("");
const [useEmail, setUseEmail] = useState("");
const [lnameError, setLnameError] = useState("");
const [loading, setLoading] = useState(false);
const [aboutError, setAboutError] = useState("");
const [useName, setUseName]=useState("")
const [useNumber, setUseNumber] = useState("");
// const [otpSent, setOptSent] = useState(false);
// const [otpError, setOtpError] = useState("");
const navigate = useNavigate();

const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
}
const handelClick =  (event) => {
    event.preventDefault();
//alert('hello')
    // password rx
    var passwordFormat = "^(.{0,7}|[^0-9]*|[^a-z]*|[a-z0-9]*)$"
    // email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    setEmailError("")
    setPasswordError("")
    setNumberError("")
    setFnameError("")
    setLnameError("")
    var phoneno = /^\d{10}$/;
    if (!input.phone) {
        setNumberError("Number is required")
    } else if (input.phone.match(phoneno)) {
        setNumberError("")
    } else {
        setNumberError("Please enter valid number")
        return true
    }
    if (!input.fname) {
        setFnameError(" first Name is required")
    }
    else
        if (!input.lname) {
            setEmailError(" Last Name is required")
        }
     else
        if (!input.email) {
            setEmailError("Email is required")
        } else if (!input.email.match(mailformat)) {
            setEmailError("Please enter your valid email")
        } else if (!input.password) {
            setPasswordError("Password is required")
           
        } else if (input.password.length < 6) {
            setPasswordError("Password must be longer than 6 characters")
            
        } else if (input.password.match(passwordFormat)) {
            setPasswordError("Password must be one character")   
        }
         else {
                setLoading(true)
                const options = {
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                        'Access-Control-Allow-Origin': '*'
                    }
                }
                const data = JSON.stringify({
                    email: input.email,
                    password: input.password,
                    phone: input.phone,
                    fname: input.fname,
                    lname: input.lname,
                    // otp: input.otp
                 
                });
                console.log("res.data",data)

                 axios.post('http://103.104.74.215:3018/krazeal/api/signup', data,options).then(res => {
                      console.log(res.data.data)
                     if (res.data.result!="false",res.data.token!="error" ) {
                        console.log("response",res.data.data.role);  
                        const data=res.data.data;
                        localStorage.setItem('_id', res.data._id);
                       localStorage.setItem("fname",res.data.data.fname);
                       localStorage.setItem("lname",res.data.data.lname);
                       localStorage.setItem("email",res.data.data.email);
                       localStorage.setItem("phone",res.data.data.phone);
                      //  localStorage.setItem("otp",res.data.data.otp);
                       localStorage.setItem("password",res.data.data.password);
                       localStorage.setItem("role",res.data.data.role);
                       localStorage.setItem("info",res.data.data.info);
                        setLoading(false)
                        toast.success(res.data.msg);
                         setTimeout(() => {
                             navigate("/login", { replace: true });
                        }, 500)
                     } else {
                        setLoading(false)
                        toast.error(res.data.msg);
                    }
                   
                }).catch(err => {
                    setLoading(false)
                    toast.error("Something went wrong");
                    var errorRes = JSON.parse(err.response.request.response)
                    if (input.fname && input.lname && input.phone &&  input.email) {
                        if (errorRes.email) {
                            setUseEmail("This email address is already used")
                        } else {
                            setUseEmail("")
                        }
                        if (errorRes.fname) {
                          setUseName(errorRes.fname[0])
                            document.getElementById("unicName").style.fontSize = "9px"
                        } else {
                            setUseName("")
                            document.getElementById("unicName").style.fontSize = "11px"
                        }
                        if (errorRes.phone) {
                          setUseNumber("Mobile number is already used")
                      } else {
                          setUseNumber("")
                      }
             
                        setAboutError("")
            
                    }
          

                })
            }
}

  return (

    <>
   {/* <Header2/> */}

      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-sm-12 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To Fastkart</h3>
                  <h4>Create New Account</h4>
                </div>
                <div className="input-box">
                  <form className="row g-4" onSubmit={handelClick}>
                    <div className="col-12 col-lg-6">
                      <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control"  onChange={handelChange} data-constraints="@Required" name="fname" value={input.fname} id="form-login-fname" placeholder="First Name" />
                        <label htmlFor="fullname">First Name</label>
                     <span className="form-validation" style={{ color: "red" }} >{fnameError}</span>
                        <span className="form-validation" style={{ color: "red" }} id="unicName">{useName}</span>
                      </div>
                    </div>
                    <div className="col-12  col-lg-6">
                      <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control"  onChange={handelChange} data-constraints="@Required" name="lname" value={input.lname} id="form-login-lname" placeholder="Last Name" />
                        <label htmlFor="fullname">Last Name</label>
                        <span className="form-validation" style={{ color: "red" }} >{lnameError}</span>
                        <span className="form-validation" style={{ color: "red" }} id="unicName">{useName}</span>

                      </div>
                    </div>
                    <div className="col-12  col-lg-6">
                      <div className="form-floating theme-form-floating">
                        <input type="email" className="form-control" id="form-register-email"  onChange={handelChange} data-constraints="@email @Required" name="email" value={input.email} placeholder="Email Address" />
                        <label htmlFor="email">Email Address</label>
                        <span className="form-validation" style={{ color: "red" }} >{emailError}</span>
                       <span className="form-validation" style={{ color: "red" }} id="unicName">{useEmail}</span>
                      </div>
                    </div>
                    {/* {otpSent === false ? (
        <>
          {" "} */}
                    <div className="col-12  col-lg-6">
                      <div className="form-floating theme-form-floating">
                        <input type="number" className="form-control"  onChange={handelChange} data-constraints=" @Numeric @Required" value={input.phone} id="form-login-number" maxlength="10" pattern="\d{10}" name="phone" placeholder="Mobile Number"  />
                        <label htmlFor="Mobile Number">Mobile Number</label>
                        <span className="form-validation" style={{ color: "red" }} >{numberError}</span>
                        <span className="form-validation" style={{ color: "red" }}>{useNumber}</span>

                      </div>
                    </div>
                    {/* <div className="col-12">
                      <div className="form-floating theme-form-floating">
                    <button onClick={sendOtp}>Send OTP</button>
                    </div></div>{" "} */}
        {/* </>
      ) : (
        <> */}
        {/* <div className="col-12">
                      <div className="form-floating theme-form-floating">
          <input
            type="text"
            placeholder="Enter OTP"
            className='form-control'
            value={input.otp}
            onChange={handelChange}
          />
           <label htmlFor="OTP">OTP</label>
                        <span className="form-validation" style={{ color: "red" }} >{otpError}</span>
                        
          <button onClick={verifyOtp}>Verify OTP</button></div></div>{" "}
          
          </>
          
      )} */}
                    <div className="col-12  col-lg-6">
                      <div className="form-floating theme-form-floating">
                        <input type="password" className="form-control"  onChange={handelChange} data-constraints="@Required" value={input.password} name="password" id="form-login-password" placeholder="Password" />
                        <label htmlFor="password">Password</label>
                        <br/><span className="form-validation" style={{ color: "red" }} >{passwordError}</span>
                      </div>
                    </div>
                    <div className="col-12  col-lg-12">
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">I agree with
                            <span>Terms</span> and <span>Privacy</span></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-animation w-100" type="submit">Sign Up</button>
                    </div>
                  </form>
                </div>
                {/* <div className="other-log-in">
                  <h6>or</h6>
                </div> */}
                <div className="log-in-button">
                  <ul>
                    <li>
                    <div className="sign-up-box">
                  <h4>Already have an account?</h4>
                  <a href="/login">Log In</a>
                </div>
                    </li>
                  </ul>
                </div>
               
                
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6" />
          </div>
        </div>
      </section>
      {/* <Footer2/> */}
      <ToastContainer position="top-center" />
    </>
  )
}

export default Register
