import React from 'react'
import "./MenuMobile.scss"
import {IoClose} from "react-icons/io5"
import {Button} from '@nextui-org/react'

import { useDispatch, useSelector } from 'react-redux'
import { mobileMenuActions } from '../../../store/UI/MobileMenu/MobileMenuUI'

const MenuMobile = () => {
  const dispatch = useDispatch();
  const mobileMenuIsVisible = useSelector((state) => state.mobileMenuUI.mobileMenuIsVisible);

  const closeMobileMenu = () => dispatch(mobileMenuActions.closeMobileMenu())

  return (
    <div className={mobileMenuIsVisible ? 'mobile-container' : 'mobile-container inactive'}>
      <IoClose onClick={closeMobileMenu}/>
      <div className="links">
        <a href="#ezlearn">EzLearn</a>
        <a href="#services" onClick={closeMobileMenu}>Services</a>
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        <div className="auth-row">
        <Button className='btn-auth' auto css={{width: '120px', color: '#000b53', backgroundColor: '#fff', fontSize: '1.5em', fontWeight: '500'}}>Login</Button>
        <Button className='btn-auth' auto css={{width: '120px', color: '#000b53', backgroundColor: '#fff',  fontSize: '1.5em', fontWeight: '500'}}>Register</Button>
        </div>
      </div>

    </div>
  )
}

export default MenuMobile