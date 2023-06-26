import React from 'react'
import { NavLink } from 'react-router-dom'
import flagUzb from '../images/1200px-Flag_of_Uzbekistan.png'
import profileImage from '../images/Ellipse 1.png'
import britianFlag from '../images/GB.png'
import notificationIcon from '../images/notification.png'
import uzbRegion from '../images/region.png'
import ruRegion from '../images/RU.png'
// components
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'

function Nastroyki() {
    return (
        <>
            <Sidebar />
            <div className="task">

                <div className="mainMargin">
                    <Search />

                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h2 className="panelUprText">Настройки</h2>
                            <button className="plus2">+</button>
                        </div>
                    </div>

                    <div className="nastroykiData">
                        <NavLink to={'/kursValyuta'} className="nastroykiCont">
                            Курс валюты
                        </NavLink>
                        <NavLink to={'/language'} className="nastroykiCont">
                            Язык
                        </NavLink>
                        <NavLink to={'/coupon'} className="nastroykiCont">
                            Купоны
                        </NavLink>
                        <NavLink to={'/obrazavaniya'} className="nastroykiCont">
                            Ценообразование
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nastroyki