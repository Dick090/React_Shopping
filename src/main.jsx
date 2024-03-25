import React from 'react'
import ReactDOM from 'react-dom/client'
import MyForm from './Src/src/src/component/MyForm.jsx'
import Product from './Project/Components/Product/Product.jsx'
import Second_bar from './Project/Components/Secound_bar/Second_bar.jsx'
import Third_bar from './Project/Components/third_bar/Third_bar.jsx'
import Down_bar from './Project/Components/Down/Down_bar.jsx'
import Nav_bar from './New_project/Components/Nav_bar/Nav_bar.jsx'
import First_bar from './New_project/Components/First_bar/First_bar.jsx'
import { Provider } from 'react-redux'
import store from './Src/src/src/Redux/store.jsx'
import Navbar from './Project/Components/Navbar/Navbar.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>   
<Navbar/> 
<Product/>
<Second_bar/>
<Third_bar/>
<Down_bar/>

{/* <Nav_bar /> */}

{/* <First_bar/> */}

</Provider>


)
