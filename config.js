

// if(process.env.NODE_ENV !== "production"){
// //test url
// const base_url = 'http://localhost:5000/api/';
// const base_url_home = 'http://localhost:5000/';
// }else{
// //live url
// const base_url = 'https://gyaanapi.herokuapp.com/api/';
// const base_url_home = 'https://gyaanapi.herokuapp.com/';
// }
const base_url = (process.env.NODE_ENV == "production")?'https://gyaanapi.herokuapp.com/api/':'http://localhost:5000/api/';
const base_url_home = (process.env.NODE_ENV == "production")?'https://gyaanapi.herokuapp.com/':'http://localhost:5000/';

 const roles = ['Teacher', 'Student', 'Admin'];
 const RAZORPAY_KEY= 'rzp_test_ukrfVTcdYzOvVw';

const APIs = {
    base_url, 
    roles,
    RAZORPAY_KEY,
    base_url_home
}



export default APIs;
