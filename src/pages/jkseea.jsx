import React, { useEffect, useState } from 'react'
import { NavLink, useParams, Link } from 'react-router-dom'
import flagUzb from '../images/1200px-Flag_of_Uzbekistan.png'
import profileImage from '../images/Ellipse 1.png'
import britianFlag from '../images/GB.png'
import notificationIcon from '../images/notification.png'
import uzbRegion from '../images/region.png'
import ruRegion from '../images/RU.png'
import leftArrowIcon from '../images/icons/arrow-left.png'
// components
import Sidebar from '../components/Sidebar';
import Search from '../components/Search'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
import { getComplexLobbies } from '../store/features/residentialComplexSlice'

function Jkseea() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComplexLobbies(id));
    }, [])

    const { lobbies, isLoading } = useSelector((state) => state.residentialComplex);
    const [floor, setFloor] = useState();

    useEffect(() => {
        const data = [];

        lobbies.map((complex) => {
            for (let i = complex.max_floor; i >= 1; --i) {
                data.push(i);
            }
        })
        setFloor(data);
    }, [lobbies])

    return (
        <>
            <Sidebar />
            <div className="task">

                <div className="mainMargin">
                    <Search />

                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <NavLink to={'/jk'} className="plus2 profileMaxNazadInformatsiyaKlient">
                                <img src={leftArrowIcon} alt="" />
                            </NavLink>
                            <h2 className="panelUprText">ЖК IkCrm</h2>
                            {/* <Link to="/create" className="plus2">+</Link> */}
                        </div>
                    </div>

                    <div
                        className="d-flex justify-content-center"
                        style={{ marginBottom: 15, marginLeft: 130 }}
                    >
                        <button className="vseButton">Все (50 кв)</button>
                        <button className="svobodnoButton">Свободно (20 кв.)</button>
                        <button className="zanyatoButton">Занято (10 кв.)</button>
                        <button className="prodnoButton">Продано (20 кв.)</button>
                    </div>

                    <div className="sozdatJkDaleData">
                        {isLoading ? lobbies.map((complex) => {
                            return (
                                complex?.lobby.map(lobby => {
                                    return (
                                        <div className="lobby_flats">
                                            <div className="dalePodyedzEtaj">
                                                {floor && floor.map((index) => {
                                                    return (
                                                        <div className="lobby_flat_number">{index} этаж</div>
                                                    )
                                                })}
                                            </div>
                                            {lobby.map((blockElement, blockElementIndex) => {
                                                return (
                                                    <Link to={`/JkData/${id}/${blockElement.id}`} className="dalePodyedzBig">
                                                        <h2 className="podyedzNameDale">Подъезд {blockElement.id}</h2>
                                                        {[...blockElement?.floor].reverse().map((floor, floorIndex) => {
                                                            return (
                                                                <div className="flat_width">
                                                                    {floor?.flat.map((flat, flatIndex) => {
                                                                        return (
                                                                            <div
                                                                                style={{ cursor: "pointer" }}
                                                                                className="podyedzNameDaleNol padyedzNameJkSeeaGreen"
                                                                                onClick={() => console.log(blockElementIndex, floorIndex, flatIndex)}
                                                                            >
                                                                                {flat.id}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            )
                                                        })}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            )
                        }) : <>Loading...</>}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Jkseea