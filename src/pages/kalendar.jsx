import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import leftIcon from '../images/arrow-left.png'
import { ru } from 'date-fns/locale';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
// other icons :)
import leftArrowIcon from '../images/icons/arrow-left.png'
// components
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'

function Kalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getNextMonthDate = () => {
        const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(nextMonthDate);
    }


    const getPrevMonthDate = () => {
        const previousMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(previousMonthDate);
    }

    const calendarDate = format(currentDate, 'LLLL yyyy', { locale: ru });

    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);

    const prefixDays = start.getDay();
    const suffixDays = 6 - end.getDay();

    const allDays = eachDayOfInterval({ start, end });


    const highLightDays = (date, index) => {

        const tasks = [
            {
                "2023-06-28": [
                    {
                        "id": 1,
                        "user_id": 75,
                        "user_last_name": "Managerov",
                        "user_first_name": "Manager",
                        "user_middle_name": "Managerovich",
                        "client_last_name": "Clientov",
                        "client_first_name": "Client",
                        "client_middle_name": "Clientovich",
                        "task_date": "2023-04-12 16:20:47",
                        "type": "Встреча",
                        "email": "sokhtaalith@gmail.com"
                    }
                ]
            },
            {
                "2023-04-15": [
                    {
                        "id": 1,
                        "user_id": 75,
                        "user_last_name": "Managerov",
                        "user_first_name": "Manager",
                        "user_middle_name": "Managerovich",
                        "client_last_name": "Clientov",
                        "client_first_name": "Client",
                        "client_middle_name": "Clientovich",
                        "task_date": "2023-04-12 16:20:47",
                        "type": "Встреча",
                        "email": "sokhtaalith@gmail.com"
                    }
                ]
            }
        ]

        const dateFormat = new Date(date);
        const formattedDate = format(dateFormat, 'yyyy-MM-dd');

        const isTask = tasks.includes(formattedDate);

        const filteredTask = tasks.filter((task) => {
            if (Object.keys(task) == formattedDate) {
                return task;
            }
        })

        return (
            <li
                className="daysList kalendarMrginTopDataRedBlue"
                data-toggle="modal"
                data-target="#exampleModal3"
            >
                <p>{index + 1}</p>

                {filteredTask.length > 0
                    ?
                    filteredTask.map((task) => {
                        return (
                            <div className="kalendarImyaBlue">Клиентов Клиент Клиентович</div>
                        )
                    })
                    : null
                }

            </li>)
    }

    return (
        <>
            <Sidebar />
            <div className="task">

                <div className="mainMargin">
                    <Search />

                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <NavLink
                                to={'/lidi'}
                                className="plus2 profileMaxNazadInformatsiyaKlient"
                            >
                                <img src={leftArrowIcon} alt="" />
                            </NavLink>
                            <h2 className="panelUprText">Календарь задач</h2>
                            <button
                                className="plus2 mb-5"
                                data-toggle="modal"
                                data-target="#exampleModal5"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="zadachiFlexCenter">
                        <div className="d-flex">
                            <button className="zadachiFlexVse">
                                <input className="zadachiFlexInputCheck" type="checkbox" />
                                Все
                            </button>
                            <button className="zadachiFlexMoiZadachi">
                                <input className="zadachiFlexInputCheck" type="checkbox" />
                                Мои задачи
                            </button>
                        </div>
                    </div>

                    <div className="wrapper">
                        <header>
                            <div className="icons calendarCurrent">
                                <span id="prev" className="material-symbols-rounded" onClick={getPrevMonthDate}>
                                    <img src={leftIcon} alt="Left" />
                                </span>
                                <p
                                    className="current-date"
                                    data-toggle="modal"
                                    data-target="#exampleModal4"
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {calendarDate}
                                </p>
                                <span id="next" className="material-symbols-rounded" onClick={getNextMonthDate}>
                                    <img
                                        className="calendarRightBtn"
                                        src={leftIcon}
                                        alt="Right"
                                    />
                                </span>
                            </div>
                        </header>
                        <div className="calendar">
                            <ul className="weeks">
                                <li className="oneDay">Понедельник</li>
                                <li className="allDay">Вторник</li>
                                <li className="allDay">Среда</li>
                                <li className="allDay">Четверг</li>
                                <li className="allDay">Пятница</li>
                                <li className="allDay">Суббота</li>
                                <li className="endDay">Воскресенье</li>
                            </ul>

                            <ul className="days">
                                {Array.from({ length: prefixDays - 1 }).map((index) => {
                                    return (
                                        <li
                                            className="daysList kalendarMrginTopDataRedBlue"
                                            data-toggle="modal"
                                            data-target="#exampleModal3"
                                        >
                                        </li>
                                    )
                                })}

                                {allDays && allDays.map((day, index) => highLightDays(day, index))}
                                {Array.from({ length: suffixDays + 1 }).map((index) => {
                                    return (
                                        <li
                                            className="daysList kalendarMrginTopDataRedBlue"
                                            data-toggle="modal"
                                            data-target="#exampleModal3"
                                        >
                                        </li>
                                    )
                                })}

                                {/* <li
                                    className="daysListRed kalendarMrginTopDataRedBlue"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                >
                                    <p>2</p>
                                    <div className="kalendarImyaRed">Клиентов Клиент Клиентович</div>
                                </li>
                                <li
                                    className="daysList kalendarMrginTopDataRedBlue"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>3</p>
                                </li>
                                <li
                                    className="daysList kalendarMrginTopDataRedBlue"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>4</p>
                                </li>
                                <li
                                    className="daysList kalendarMrginTopDataRedBlue"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>5</p>
                                </li>
                                <li
                                    className="daysList kalendarMrginTopDataRedBlue"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>6</p>
                                </li>
                                <li
                                    className="daysList kalendarMrginTopDataRedBlue"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>7</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>8</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>9</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>10</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                >
                                    <p>11</p>
                                    <div className="kalendarImyaRed">Клиентов Клиент Клиентович</div>
                                    <div className="kalendarImyaRed">Клиентов Клиент Клиентович</div>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                >
                                    <p>12</p>
                                    <div className="kalendarImyaRed">Клиентов Клиент Клиентович</div>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>13</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>14</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>15</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>16</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>17</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>18</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                >
                                    <p>19</p>
                                    <div className="kalendarImyaRed">Клиентов Клиент Клиентович</div>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                >
                                    <p>20</p>
                                    <div className="kalendarImyaRed">Клиентов Клиент Клиентович</div>
                                    <div className="kalendarImyaRed">Клиентов Клиент Клиентович</div>
                                    <h5>+2 задачи</h5>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>21</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>22</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>23</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>24</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>25</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>26</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>27</p>
                                </li>
                                <li
                                    className="today"
                                    data-toggle="modal"
                                    data-target="#exampleModal2"
                                >
                                    <p>28</p>
                                    <div className="kalendarImyaBlue">Клиентов Клиент Клиентович</div>
                                    <div className="kalendarImyaBlue">Клиентов Клиент Клиентович</div>
                                    <h5>+2 задачи</h5>
                                </li>
                                <li
                                    className="kalendarBorderRadiusLeft daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal2"
                                >
                                    <p>29</p>{" "}
                                    <div className="kalendarImyaBlue">Клиентов Клиент Клиентович</div>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>30</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>31</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>1</p>
                                </li>
                                <li
                                    className="daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal2"
                                >
                                    <p>2</p>
                                    <div className="kalendarImyaBlue">Клиентов Клиент Клиентович</div>
                                </li>
                                <li
                                    className="inactive daysList"
                                    data-toggle="modal"
                                    data-target="#exampleModal2"
                                >
                                    <p>3</p>
                                    <div className="kalendarImyaBlue">Клиентов Клиент Клиентович</div>
                                </li>
                                <li
                                    className="inactive daysList kalendarBorderRadiusRight"
                                    data-toggle="modal"
                                    data-target="#exampleModal3"
                                >
                                    <p>4</p>
                                </li> */}
                            </ul>
                        </div>
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
                    <div
                        className="modal-content"
                        style={{
                            borderRadius: "20px !important",
                            border: "2px solid #94B2EB",
                            background: "#F9FBFF"
                        }}
                    >
                        <div className="modal-header d-flex justify-content-center">
                            <div className="modalKalendarDate">28 Декабря 2022</div>
                        </div>
                        <div className="modal-body d-flex justify-content-center flex-column align-items-center">
                            <div className="d-flex justify-content-between kalendarModalBody">
                                <div className="modalImyaKalendar">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                                <div className="modalDataKalendar">
                                    Ответственный: <br /> <b>Менеджеров Менеджеров</b>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between kalendarModalBodyBlue">
                                <div className="modalImyaKalendar">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                                <div className="modalDataKalendar">
                                    Ответственный: <br /> <b>Менеджеров Менеджеров</b>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between kalendarModalBodyBlue">
                                <div className="modalImyaKalendar">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                                <div className="modalDataKalendar">
                                    Ответственный: <br /> <b>Менеджеров Менеджеров</b>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between kalendarModalBody">
                                <div className="modalImyaKalendar">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                                <div className="modalDataKalendar">
                                    Ответственный: <br /> <b>Менеджеров Менеджеров</b>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between kalendarModalBody">
                                <div className="modalImyaKalendar">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                                <div className="modalDataKalendar">
                                    Ответственный: <br /> <b>Менеджеров Менеджеров</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal2"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel2"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div
                        className="modal-content"
                        style={{
                            borderRadius: "20px !important",
                            border: "2px solid #94B2EB",
                            background: "#F9FBFF"
                        }}
                    >
                        <div className="modal-header d-flex justify-content-center">
                            <div className="modalKalendarDateBlue">20 Декабря 2022</div>
                        </div>
                        <div className="modal-body d-flex justify-content-center flex-column align-items-center">
                            <div className="d-flex justify-content-between kalendarModalBody">
                                <div className="modalImyaKalendar2">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                            </div>
                            <div className="d-flex justify-content-between kalendarModalBodyBlue">
                                <div className="modalImyaKalendar2">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                            </div>
                            <div className="d-flex justify-content-between kalendarModalBodyBlue">
                                <div className="modalImyaKalendar2">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                            </div>
                            <div className="d-flex justify-content-between kalendarModalBody">
                                <div className="modalImyaKalendar2">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                            </div>
                            <div className="d-flex justify-content-between kalendarModalBody">
                                <div className="modalImyaKalendar2">
                                    Клиентов Клиент Клиентович <br /> 28.12.2022 12:12:12 Встреча
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal3"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel3"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div
                        className="modal-content"
                        style={{
                            borderRadius: "20px !important",
                            border: "2px solid #94B2EB",
                            background: "#F9FBFF"
                        }}
                    >
                        <div className="modal-header d-flex justify-content-center">
                            <div className="modalKalendarDateBlue">20 Декабря 2022</div>
                        </div>
                        <div
                            style={{ height: 340 }}
                            className="modal-body d-flex justify-content-center flex-column align-items-center"
                        >
                            <h3 className="modalContentCalendarNet">На сегодня задач нет</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal4"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel4"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div
                        className="modal-content"
                        style={{
                            borderRadius: "20px !important",
                            border: "2px solid #94B2EB",
                            background: "#F9FBFF"
                        }}
                    >
                        <div
                            style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                            className="modal-body d-flex justify-content-center flex-column align-items-center"
                        >
                            <div className="d-flex">
                                <div className="d-flex flex-column">
                                    <button className="modalMonth">Январь</button>
                                    <button className="modalMonth">Февраль</button>
                                    <button className="modalMonth">Март</button>
                                    <button className="modalMonth">Апрель</button>
                                    <button className="modalMonth">Май</button>
                                    <button className="modalMonth">Июнь</button>
                                </div>
                                <div className="d-flex flex-column">
                                    <button className="modalMonth">Июль</button>
                                    <button className="modalMonth">Август</button>
                                    <button className="modalMonth">Сентябрь</button>
                                    <button className="modalMonth">Октябрь</button>
                                    <button className="modalMonth">Ноябрь</button>
                                    <button className="modalMonth">Декабрь</button>
                                </div>
                                <div className="dropdown">
                                    <button
                                        className="btn modalYearSelect dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        2022
                                    </button>
                                    <div
                                        className="dropdown-menu dropdownBodyKalendar"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <a className="dropdown-item yearNameKalendar" href="#">
                                            2021
                                        </a>
                                        <a className="dropdown-item yearNameKalendar" href="#">
                                            2019
                                        </a>
                                        <a className="dropdown-item yearNameKalendar" href="#">
                                            2018
                                        </a>
                                        <a className="dropdown-item yearNameKalendar" href="#">
                                            2017
                                        </a>
                                        <a className="dropdown-item yearNameKalendar" href="#">
                                            2016
                                        </a>
                                        <a className="dropdown-item yearNameKalendar" href="#">
                                            2015
                                        </a>
                                        <a className="dropdown-item yearNameKalendar" href="#">
                                            2014
                                        </a>
                                        <a className="dropdown-item yearNameKalendar" href="#">
                                            2013
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal5"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel5"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content ZadachiModalBody">
                        <div className="modal-body">
                            <input className="zadachiClient" placeholder="Клиент" type="text" />
                            <div className="zadachiBigClientInformation">
                                <div className="textareZadachi" contentEditable="true">
                                    <div className="btn-group dropup">
                                        <button
                                            type="button"
                                            className="d-flex chatDropDown dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <div className="smsDlya">
                                                <div className="cliendZadachiNaZaftraText">
                                                    Задача на <span>Завтра</span> для Магомед:{" "}
                                                    <img src="../images/Call.png" alt="Phone Calling" />
                                                    Позвонить:
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div contentEditable="false" className="d-flex textareaButttonSend">
                                    <button className="PostavitButton">Поставить</button>
                                    <button className="OtmenitButton">Отменить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kalendar 
