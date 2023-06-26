import React, { useEffect, useState } from 'react'
import flagUzb from '../images/1200px-Flag_of_Uzbekistan.png'
import callIcon from '../images/Call.png'
import chartOne from '../images/Chart (1).png'
import chartTwo from '../images/Chart.png'
import chartThree from '../images/ChartOval.png'
import profileImage from '../images/Ellipse 1.png'
import britianFlag from '../images/GB.png'
import notificationIcon from '../images/notification.png'
import uzbRegion from '../images/region.png'
import ruRegion from '../images/RU.png'
import tasksIcon from '../images/zadachi.png'

// other icons :)
import printIcon from '../images/icons/edit.png'

import { NavLink } from 'react-router-dom';
// components
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
import { getDashboard } from '../store/features/dashboardSlice'
// chartjs
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function Home() {
    const dispatch = useDispatch();

    const [monthlySales, setMonthlySales] = useState([]);
    const [managerSales, setManagerSales] = useState([]);
    const [sales, setSales] = useState([]);

    useEffect(() => {
        dispatch(getDashboard());
    }, [])

    const { isLoading, dashboard } = useSelector((state) => state.dashboard);

    useEffect(() => {

        if (!isLoading) {
            return;
        }

        dashboard.map((dashData) => {
            setMonthlySales(dashData.monthly_sales);
            setManagerSales(dashData.individual_manager_sales);
            setSales(dashData.sales);
        })

    }, [isLoading])

    const chartDataMonthlySales = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [
            {
                label: 'Продажи за месяц',
                data: [...monthlySales],
                borderColor: '#1CA8A1',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const chartDataSales = {
        labels: [3, 6.5, 6.5, 9, 9.5, 10, 2.5, 6.5, 9, 5],
        datasets: [
            {
                label: 'Оборот',
                data: [...sales],
                borderColor: '#1CA8A1',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const managerSaledData = {
        labels: ['Red', 'Yellow', 'Green', "Brown", "Pink", "Blue"],
        datasets: [
            {
                data: [...managerSales],
                backgroundColor: ['red', 'yellow', 'green', 'brown', 'pink', 'blue'],
            },
        ],
    };

    return (
        <>
            <Sidebar />
            <div className="dashboard d-flex">
                <div className="mainMargin">
                    <Search />
                    {isLoading ?
                        dashboard.map((dashboardData) => {
                            return (
                                <>
                                    <div className="index_panel_i_data">
                                        <h2 className="panelUprText panelUpravleniya">Панель управления</h2>
                                        <div id="CurrentDayToday">Дата: {dashboardData.date_today}</div>
                                    </div>

                                    <div
                                        style={{ maxWidth: "74vw !important" }}
                                        className="d-flex growLidiHome row"
                                    >
                                        <div className="novieLidi col lidiMarginRight2">
                                            <h3>Новые лиды</h3>
                                            <h2 className="lidi25">{dashboardData.new_clients}</h2>
                                        </div>
                                        <div className="novieLidi col lidiMarginRight2">
                                            <h3>
                                                На перегово <br /> рах
                                            </h3>
                                            <h2>{dashboardData.in_negotiations}</h2>
                                        </div>
                                        <div className="novieLidi col lidiMarginRight2">
                                            <h3>
                                                Оформле <br /> ние сделки
                                            </h3>
                                            <h2>{dashboardData.make_deal}</h2>
                                        </div>
                                        <div className="zadachiLidi col lidiMarginRight2">
                                            <h3>Задачи</h3>
                                            <h2>{dashboardData.full_task}</h2>
                                            <hr />
                                            <p>
                                                На сегодня: {dashboardData.today} <br />
                                                На завтра: {dashboardData.tomorrow} <br />
                                                На неделю: {dashboardData.week}
                                            </p>
                                        </div>
                                        <div className="novieLidi col">
                                            <h3>
                                                Просрочен <br /> ные задачи
                                            </h3>
                                            <h2>{dashboardData.overdue_tasks}</h2>
                                        </div>
                                    </div>

                                    <div className="d-flex bigHomeIndex mb-4">
                                        <div className="divColumnChart">
                                            <div style={{ height: "100%" }} className="chartDiv bigProdajZaMesyach lidiMarginRight2">
                                                <h2>Продажи за месяц</h2>
                                                <Line style={{ marginBottom: "24px" }} data={chartDataMonthlySales} />
                                                <div className="editDiv">
                                                    <button className="editButton">
                                                        <img src={printIcon} alt="Edit" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div style={{ height: "100%" }} className="chartDiv lidiMarginRight2">
                                                <h2 className="chart1Individual">
                                                    Оборот
                                                </h2>
                                                <Line style={{ marginBottom: "24px" }} data={chartDataSales} />
                                                <div className="editDiv">
                                                    <button className="editButton">
                                                        <img src={printIcon} alt="Edit" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="circleChart">
                                            <h2>Индивидуальные продажи</h2>
                                            <div className="ovalChartDiv">
                                                <Pie data={managerSaledData} />
                                            </div>
                                            <div
                                                style={{ width: "20vw", marginTop: 60 }}
                                                className="d-flex ovalNameRadius"
                                            >
                                                <p className="ovalChartName">Менеджеров Менеджер</p>
                                                <div className="ovalChartRadiusRed" />
                                            </div>
                                            <div style={{ width: "20vw", marginTop: "-15px" }} className="d-flex">
                                                <p className="ovalChartName">Менеджеров Менеджер</p>
                                                <div className="ovalChartRadiusYellow" />
                                            </div>
                                            <div style={{ width: "20vw", marginTop: "-15px" }} className="d-flex">
                                                <p className="ovalChartName">Менеджеров Менеджер</p>
                                                <div className="ovalChartRadiusGreen" />
                                            </div>
                                            <div style={{ width: "20vw", marginTop: "-15px" }} className="d-flex">
                                                <p className="ovalChartName">Менеджеров Менеджер</p>
                                                <div className="ovalChartRadiusBrown" />
                                            </div>
                                            <div style={{ width: "20vw", marginTop: "-15px" }} className="d-flex">
                                                <p className="ovalChartName">Менеджеров Менеджер</p>
                                                <div className="ovalChartRadiusPink" />
                                            </div>
                                            <div style={{ width: "20vw", marginTop: "-15px" }} className="d-flex">
                                                <p className="ovalChartName">Менеджеров Менеджер</p>
                                                <div className="ovalChartRadiusDarkBlue" />
                                            </div>
                                            <div className="editDiv">
                                                <button className="editButton2">
                                                    <img src={printIcon} alt="Edit" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        style={{ maxWidth: "74vw !important" }}
                                        className="d-flex growLidiHome row"
                                    >
                                        <div className="novieLidi col lidiMarginRight2">
                                            <h3>Количество ЖК</h3>
                                            <h2 className="lidi25">{dashboardData.house_count}</h2>
                                        </div>
                                        <div className="novieLidi col lidiMarginRight2">
                                            <h3>Свободные кв.</h3>
                                            <h2>{dashboardData.house_flat_status_free}</h2>
                                        </div>
                                        <div className="novieLidi col lidiMarginRight2">
                                            <h3>На брони</h3>
                                            <h2>{dashboardData.house_flat_status_booking}</h2>
                                        </div>
                                        <div className="novieLidi col lidiMarginRight2">
                                            <h3>На рассрочке</h3>
                                            <h2>{dashboardData.house_flat_status_sold}</h2>
                                        </div>
                                        <div className="zadachiLidi col mb-3">
                                            <h3>Успешные сделки</h3>
                                            <h2>6</h2>
                                            <hr />
                                            <p>{dashboardData.price} у.е.</p>
                                        </div>
                                    </div>
                                    <div className="plusDiv">
                                        <button className="plus">+</button>
                                    </div>
                                </>
                            )
                        })

                        : <div>Loading...</div>}
                </div>
            </div>
        </>
    )
}

export default Home