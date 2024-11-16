import React, { useState } from 'react'
import '../css/Header.css'
import { BsFillBasket2Fill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/BasketSlice';
import { useDispatch} from 'react-redux'



function Header() {
  const [theme, setTheme] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { products } = useSelector((store) => store.basket)

  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff"
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black"
    }

    setTheme(!theme)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className='flex-row' onClick={() => navigate('/')} >
        <img className='logo' src="./src/images/logo.jpg" alt="" />
        <p className='logo-text'>NAME</p>
      </div>

      <div className='flex-row'>
        <input className='search-input' type="text" placeholder='Search...' />

        <div>
          {theme ? <MdOutlineDarkMode className='icons' onClick={changeTheme} /> : <CiLight className='icons' onClick={changeTheme} />}

          <Badge onClick={()=> dispatch(setDrawer())} badgeContent={products.length} color="error">
            <BsFillBasket2Fill className='icons' />
          </Badge>

        </div>

       

      </div>
    </div>
  )
}

export default Header
