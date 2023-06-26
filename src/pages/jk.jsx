import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import flagUzb from '../images/1200px-Flag_of_Uzbekistan.png'
import profileImage from '../images/Ellipse 1.png'
import eyeIcon from '../images/eye.png'
import britianFlag from '../images/GB.png'
import notificationIcon from '../images/notification.png'
import uzbRegion from '../images/region.png'
import ruRegion from '../images/RU.png'
import deleteIcon from '../images/trash.png'
// components 
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
import { getComplexes, deleteComplex } from '../store/features/residentialComplexSlice'
// hooks
import { useDeleteComplex } from '../hooks/useDeleteComplex';
// jotai
import { useAtom } from "jotai";

function Jk() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDeleted, setIsDeleted] = useAtom(useDeleteComplex);

    useEffect(() => {
        dispatch(getComplexes());
    }, [isDeleted])

    const { complexes, isLoading } = useSelector((state) => state.residentialComplex);
    const [complexId, setComplexId] = useState(null);

    const deleteResidentialComplex = () => {
        dispatch(deleteComplex(complexId))
            .then(() => {
                setIsDeleted(!isDeleted);
            })
    }

    return (
        <>
            <div className="task">
                <Sidebar />

                <div className="mainMargin">
                    <Search />
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h2 className="panelUprText">ЖК</h2>
                            <Link to="/newJk" className="plus2">
                                +
                            </Link>
                        </div>
                        <div className="miniSearchDiv5">
                            <div className='miniIonIconSearch'>
                                <ion-icon
                                    className="md hydrated miniSearchIconInput"
                                    name="search-outline"
                                    role="img"
                                    aria-label="search outline"
                                />
                            </div>
                            <input
                                placeholder="Поиск по клиентам"
                                className="miniInputSdelka5"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="jkData">
                        <div className="jkMiniData2">
                            <div className="checkboxDivInput jkNumberInputChick">
                                <input className="checkBoxInput" type="checkbox" />
                            </div>
                            <div className="checkboxDivInput jkNumberInputChick">№</div>
                            <div className="checkboxDivTextInput">Наименование ЖК</div>
                            <div className="checkboxDivTextInput2">Корпус</div>
                            <div className="checkboxDivTextInput">Информация</div>
                            <div className="checkboxDivTextInput4 deystvieJkHome">Действиe</div>
                        </div>

                        {complexes.length == 0
                            ?
                            <div>Тут пока ничего нету</div>
                            :
                            isLoading ? complexes && complexes.map((complex) => {
                                return (
                                    <div id={complex.id} className="jkMiniData mt-1">

                                        <div className="checkboxDivInput jkNumberInputChick">
                                            <input className="checkBoxInput" type="checkbox" />
                                        </div>
                                        <div className="checkboxDivInput jkNumberInputChick">{complex.id}</div>
                                        <div className="checkboxDivTextInput">{complex.name}</div>
                                        <div className="checkboxDivTextInput2">{complex.corpus}</div>
                                        <div className="checkboxDivTextInput48">
                                            {complex.description}
                                        </div>
                                        <a
                                            href="#"
                                            style={{ display: "none", width: 0, height: 0, margin: 0 }}
                                        ></a>
                                        <div className="checkboxDivTextInput4Img">
                                            <a
                                                href="#"
                                                style={{ display: "none", width: 0, height: 0, margin: 0 }}
                                            ></a>
                                            <a href="#" className="jkModalOpenModalJK" onClick={() => navigate(`/jkSee/${complex.id}`)}>
                                                <div className="seaDiv">
                                                    <img
                                                        style={{ marginTop: 4 }}
                                                        width={25}
                                                        height={25}
                                                        src={eyeIcon}
                                                        alt="Eye"
                                                    />
                                                </div>
                                            </a>
                                            <a href="#" className="seaDiv" onClick={() => setComplexId(complex.id)}>
                                                <img
                                                    className="mt-1"
                                                    width={20}
                                                    height={20}
                                                    data-toggle="modal"
                                                    data-target="#exampleModalLong"
                                                    src={deleteIcon}
                                                    alt="Trash"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                )
                            }) : <div> Loading...</div>
                        }

                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModalLong"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ border: "none" }}>
                        <div className="modal-body">
                            <h2 className="modalVideystvitelno">
                                Вы действительно хотите удалить
                            </h2>
                            <div className="d-flex justify-content-center mt-5">
                                <button className="modalVideystvitelnoDa" onClick={deleteResidentialComplex} data-dismiss="modal">
                                    Да
                                </button>
                                <button className="modalVideystvitelnoNet" data-dismiss="modal">
                                    Нет
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jk