import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import jkSize from '../images/a6d5ae15f8f52bd6b9db53be7746c650 1.png'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
import { getLobbyFlats, getFlats } from '../store/features/residentialComplexSlice'
// components
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'

// other icons :)
import leftArrowIcon from '../images/icons/arrow-left.png'

function JkData() {
    const dispatch = useDispatch();
    const { complexId, lobbyId } = useParams()

    useEffect(() => {
        dispatch(getLobbyFlats({ complexId, lobbyId }))
    }, [])


    const { flats, isLoading, singleFlat } = useSelector((state) => state.residentialComplex);
    const [currentFlat, setCurrentFlat] = useState();
    const [currentFloor, serCurrentFloor] = useState();
    // const [curren, setCurrentFloorFlat] = useState();

    const [arr, setArr] = useState([
        {
            complex_id: 1,
            lobby_id: 1,
            floor: [
                {
                    id: 1,
                    flat: [
                        {
                            id: 623,
                            color_status: 0,
                            number_of_flat: 47,
                            areas: {
                                attic: 0,
                                total: "75",
                                balcony: 0,
                                housing: "2",
                                kitchen: "14",
                                terraca: 0,
                                basement: 0
                            },
                            price: null,
                            contract_number: null,
                            room_count: 2
                        },
                        {
                            id: 624,
                            color_status: 0,
                            number_of_flat: 47,
                            areas: {
                                attic: 0,
                                total: "75",
                                balcony: 0,
                                housing: "2",
                                kitchen: "14",
                                terraca: 0,
                                basement: 0
                            },
                            price: null,
                            contract_number: null,
                            room_count: 1
                        },
                        {
                            id: 625,
                            color_status: 0,
                            number_of_flat: 47,
                            areas: {
                                attic: 0,
                                total: "75",
                                balcony: 0,
                                housing: "2",
                                kitchen: "14",
                                terraca: 0,
                                basement: 0
                            },
                            price: null,
                            contract_number: null,
                            room_count: 3
                        }
                    ]
                },
                {
                    id: 2,
                    flat: [
                        {
                            id: 626,
                            color_status: 0,
                            number_of_flat: 47,
                            areas: {
                                attic: 0,
                                total: "75",
                                balcony: 0,
                                housing: "2",
                                kitchen: "14",
                                terraca: 0,
                                basement: 0
                            },
                            price: null,
                            contract_number: null,
                            room_count: 2
                        },
                        {
                            id: 627,
                            color_status: 0,
                            number_of_flat: 47,
                            areas: {
                                attic: 0,
                                total: "75",
                                balcony: 0,
                                housing: "2",
                                kitchen: "14",
                                terraca: 0,
                                basement: 0
                            },
                            price: null,
                            contract_number: null,
                            room_count: 1
                        },
                        {
                            id: 628,
                            color_status: 0,
                            number_of_flat: 47,
                            areas: {
                                attic: 0,
                                total: "75",
                                balcony: 0,
                                housing: "2",
                                kitchen: "14",
                                terraca: 0,
                                basement: 0
                            },
                            price: null,
                            contract_number: null,
                            room_count: 3
                        }
                    ]
                },
            ]
        }
    ]);

    const dragStart = (floor, flat) => {
        setCurrentFlat(flat);
        serCurrentFloor(floor);
    }

    const dragOver = (e, flat) => {
        e.preventDefault();
        // e.target.style.display = "none";
        // console.log(flat);
        // console.log(e.target); 

        console.log(flat);

        // if(e.target)
        // console.log(e.target.className);

        // if (e.target.className == 'jkHouseGreen') {
        // e.target.style.marginLeft = "20px";
        // console.log(true);
        // }

        // e.target.style.background = "black"
    }

    const flatDrop = (e, floorDrop, flatDrop) => {
        if (floorDrop == undefined || currentFloor == undefined) return;

        // if (floorDrop.id != currentFloor.id) return;

        console.log(floorDrop, flatDrop)

        // arr[0]?.floor?.forEach((floor) => {
        //     if (floor.id == currentFloor.id) {

        //         let currentFlatIndex = floor.flat.findIndex((flat) => flat.id == currentFlat.id)
        //         let dropFlatIndex = floor.flat.findIndex((flat, index) => flat.id == flatDrop.id)

        //         let reserve = floor.flat[currentFlatIndex]
        //         floor.flat[currentFlatIndex] = floor.flat[dropFlatIndex];
        //         floor.flat[dropFlatIndex] = reserve;

        //         console.log('this is floor', floor);
        //     }
        // })

        // setArr([...arr])
    }

    const floorDrop = (e, floor) => {
        if (floor == undefined || currentFloor == undefined) return;

        if (floor.id == currentFloor.id) return;

        console.log('currentFlat', floor);
    }

    return (
        <>
            <Sidebar />
            {isLoading ?
                <>
                    <div className="task">
                        <div className="mainMargin">
                            <Search />

                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <NavLink
                                        to={`/jkSee/${complexId}`}
                                        className="plus2 profileMaxNazadInformatsiyaKlient"
                                    >
                                        <img src={leftArrowIcon} alt="" />
                                    </NavLink>
                                    {flats.map((flat) => {
                                        return (
                                            <h2 className="panelUprText">ЖК IkCrm Подъезд {flat.lobby_id}</h2>
                                        )
                                    })}
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-center mt-3"
                                style={{ marginBottom: 15, maxWidth: 1300 }}
                            >
                                <button className="vseButton">Все (50 кв)</button>
                                <button className="svobodnoButton">Свободно (20 кв.)</button>
                                <button className="zanyatoButton">Занято (10 кв.)</button>
                                <button className="prodnoButton">Продано (20 кв.)</button>
                            </div>

                            <div className="card card-body accordionData">
                                <div className="d-flex" style={{ marginTop: 20 }}>
                                    <div className="checkboxDivTextInput7222">Этаж</div>

                                    {flats.map((flat) => {
                                        return (
                                            <div className="podyedzNumber">Подъезд № {flat.lobby_id}</div>
                                        )
                                    })}

                                </div>
                                {isLoading ? arr.map((flat) => {
                                    return (
                                        [...flat?.floor].reverse().map((floor) => {
                                            return (
                                                <div className="d-flex" style={{ marginTop: 10 }}>
                                                    <div className="jkDomNumber">{floor.id}</div>

                                                    <div className="jkAllHouse"
                                                        onDragOver={(e) => e.preventDefault()}
                                                        onDrop={(e) => floorDrop(e, floor)}
                                                    >
                                                        {floor.flat.map((flat) => {
                                                            return (
                                                                <button
                                                                    className="jkHouseGreen border border-0"
                                                                    type="button"
                                                                    data-toggle="modal"
                                                                    data-target="#exampleModal"
                                                                    onDragStart={() => dragStart(floor, flat)}
                                                                    onDragOver={(e) => dragOver(e, flat)}
                                                                    onDrop={(e) => flatDrop(e, floor, flat)}
                                                                    onClick={() => console.log(flat)}
                                                                    // onClick={() =>
                                                                    //     dispatch(
                                                                    //         getFlats({
                                                                    //             complexId: complexId,
                                                                    //             lobbyId: lobbyId,
                                                                    //             floorId: floor.id,
                                                                    //             flatId: flat.id
                                                                    //         }))}
                                                                    draggable
                                                                >
                                                                    <div className="jkHoueseBlueKomNumber">{flat.room_count} ком</div>
                                                                    <div className="jkHouseGreeninData">
                                                                        {flat.areas.total} м2 <hr className="jkHouseGreeninDataHr" /> <br /> {flat.price} у.е.
                                                                        <br /> за м2
                                                                    </div>
                                                                </button>
                                                            )
                                                        })}
                                                    </div>

                                                </div>
                                            )
                                        })
                                    )
                                })
                                    : <div>Loading...</div>}
                            </div>
                        </div>
                    </div>

                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content modalMyJk">
                                <div className="modal-header border border-0">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                        style={{
                                            marginLeft: 30,
                                            fontFamily: "Rubik",
                                            marginTop: 10,
                                            marginBottom: "-20px"
                                        }}
                                    >
                                        140 - Квартира 45.00 м 2
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex">
                                        <div>
                                            <img
                                                width={364}
                                                height={260}
                                                src={jkSize}
                                                alt="JkDom"
                                            />
                                        </div>
                                        <div>
                                            <div className="modalJkData mb-4">
                                                Цена
                                                <div className="modalJkYeuro">1000.00 у.е.</div>
                                            </div>
                                            <div className="modalJkData mb-4">
                                                Количеств комнат
                                                <div className="modalJkYeuro2">2</div>
                                            </div>
                                            <div className="d-flex mb-4">
                                                <div
                                                    className="custom-select modalSelect"
                                                    style={{ width: 200 }}
                                                >
                                                    <select
                                                        className="selectModal"
                                                    >
                                                        <option value={0}>Статус</option>
                                                        <option value="./prodno.html">Продано</option>
                                                        <option id="zanyatiOption" data-toggle="modal" data-target="#exampleModal2" value={2}>
                                                            Занято
                                                        </option>
                                                        <option value={3}>Свободно</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <NavLink
                                                        to={'/jkEdit'}
                                                        type="button"
                                                        className="modalPodrobnoButton"
                                                    >
                                                        Подробно
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="modalJkDataFio">
                                                Ф.И.О.
                                                <div className="modalJkFioM">
                                                    Клиентов Клиент <br /> Клиентович
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="modal fade"
                        id="exampleModal2"
                        tabIndex={-2}
                        role="dialog"
                        aria-labelledby="exampleModalLabel2"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content modalMyJk2">
                                <div className="modal-header border border-0">
                                    <div
                                        className="d-flex justify-content-between"
                                        style={{ width: "100%" }}
                                    >
                                        <div>
                                            <h5 className="nomerKvartiraChenaKvartiri">
                                                Номер квартиры: <b>140</b> <br /> Цена квартиры: <b>41 850</b>{" "}
                                                у.е.
                                            </h5>
                                        </div>
                                        <div>
                                            <h5 className="nomerKvartiraChenaKvartiri">
                                                Общая площадь: <b>45 m2</b> <br /> Цена квартиры: <b>41 850</b>{" "}
                                                у.е.
                                            </h5>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span id="closeSpan" aria-hidden="true">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div style={{ width: 500 }}>
                                        <div className="sozdatImyaSpsok">
                                            <h3 className="sozdatImyaSpisokH3">Имя</h3>
                                            <input className="sozdatImyaSpisokInput" type="text" />
                                        </div>
                                        <div className="sozdatImyaSpsok">
                                            <h3 className="sozdatImyaSpisokH3">Фамилия</h3>
                                            <input className="sozdatImyaSpisokInput" type="text" />
                                        </div>
                                        <div className="sozdatImyaSpsok">
                                            <h3 className="sozdatImyaSpisokH3">Отчество</h3>
                                            <input className="sozdatImyaSpisokInput" type="text" />
                                        </div>
                                    </div>
                                    <div className="sozdatImyaSpsok">
                                        <h3 className="sozdatImyaSpisokH3">Номер телефона</h3>
                                        <div className="d-flex">
                                            <div>
                                                <img src="../images/region.png" alt="Region" />
                                            </div>
                                            <div>
                                                <label
                                                    style={{
                                                        marginBottom: "-35px",
                                                        zIndex: 99,
                                                        width: 50,
                                                        marginLeft: 5,
                                                        marginRight: "-55px",
                                                        position: "sticky",
                                                        marginTop: 13,
                                                        paddingLeft: 6
                                                    }}
                                                    htmlFor={+998}
                                                >
                                                    +998
                                                </label>
                                                <input
                                                    className="sozdatImyaSpisokInputTel"
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div>
                                            <div className="sozdatImyaSpsok">
                                                <h3 className="sozdatImyaSpisokH3">Номер телефона</h3>
                                                <div className="d-flex">
                                                    <div>
                                                        <img src="../images/region.png" alt="Region" />
                                                    </div>
                                                    <div>
                                                        <label
                                                            style={{
                                                                marginBottom: "-35px",
                                                                zIndex: 99,
                                                                width: 50,
                                                                marginLeft: 5,
                                                                marginRight: "-55px",
                                                                position: "sticky",
                                                                marginTop: 13,
                                                                paddingLeft: 6
                                                            }}
                                                            htmlFor={+998}
                                                        >
                                                            +998
                                                        </label>
                                                        <input
                                                            className="sozdatImyaSpisokInputTel"
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sozdatImyaSpsok">
                                                <h3 className="sozdatImyaSpisokH3">Серийный номер паспорта</h3>
                                                <input className="sozdatImyaSpisokInput" type="text" />
                                            </div>
                                            <button
                                                type="submit"
                                                className="sozdatImyaSpisokSozdatButton text-light"
                                            >
                                                Создать
                                            </button>
                                        </div>
                                        <div className="jkDataRightTop">
                                            <div
                                                className="d-flex"
                                                style={{ marginTop: "-30px", marginBottom: 30 }}
                                            >
                                                <img
                                                    className="selectOPttionClickedImage"
                                                    src="../images/Frame 29.png"
                                                    alt="Frame"
                                                />
                                                <h3 className="sozdatImyaSpisokH3 predoplataImageRight">
                                                    Предоплата
                                                </h3>
                                            </div>
                                            <div className="sozdatImyaSpsok">
                                                <h3 className="sozdatImyaSpisokH3">Сумма предоплаты</h3>
                                                <input className="sozdatImyaSpisokInput" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : <div>Loading...</div>
            }

        </>
    )
}

export default JkData