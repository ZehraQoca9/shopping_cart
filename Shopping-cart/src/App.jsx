import { useState } from 'react'
import './App.css'
import PageContainer from './container/pageContainer'
import Header from './Components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer'
import {useDispatch, useSelector } from 'react-redux'
import { setDrawer } from './redux/slices/BasketSlice'
import {removeItem} from './redux/slices/BasketSlice'


function App() {

  const {products, drawer} = useSelector((store)=> store.basket)
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <PageContainer>
        <Header/>
        <RouterConfig/>     
        <Loading/>
        <Drawer anchor='right' onClose={()=>dispatch(setDrawer())} open={drawer}>
          {
            products && products.map((product)=>{
              return (
                <div className='flex-row' style={{padding: '20px'}}>
                  <img style={{marginRight: "10px"}} src={product.image} width={80} height= {80} alt="" />
                  <p style={{width: '350px', marginRight: "10px"}} >{product.title}({product.count})</p>
                  <p style={{fontWeight: 'bold',marginRight: '10px'}} >{product.price}$</p>
                  <button onClick={() => handleRemove(product.id)} style={{padding: '5px', border: 'none', borderRadius: '5px', backgroundColor: 'lightcoral', color: '#fff'}} >Delete</button>
                </div>
              )
            })
          }
      </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
