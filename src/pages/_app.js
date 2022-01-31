import { Provider } from 'react-redux'; 
import Navbar from "/src/components/Header/Navbar.jsx"
import $ from 'jquery';
import '/styles/globals.css'
import store from '/redux/store.js';   
import 'bootstrap/dist/css/bootstrap.min.css'



function MyApp({ Component, pageProps }) {
  return(
    
<Provider store={store}>
<div className="wrapper">
<Navbar />
  <Component {...pageProps} />
</div>
</Provider >
  )
}

export default MyApp