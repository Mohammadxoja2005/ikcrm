import React, { useState, useEffect } from 'react'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
// jotai
import { atom, useAtom } from "jotai";
import { useInstallmentPlan } from '../hooks/useInstallmentPlan';

function InstallmenPlan() {
    const dispatch = useDispatch();

    const [installmentPlanData, setInstallmentPlanData] = useAtom(useInstallmentPlan);

    const [period, setPeriod] = useState(12);
    const [planPercent, setPlanPercent] = useState(10);
    const [firstInitialFee, setFirstInitalFee] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        setInstallmentPlanData({
            client_full_name: "",
            phone: "",
            flat_number: "",
            passport: "",
            period: period,
            percent: planPercent,
            initial_fee: firstInitialFee,
            contract_start_date: date
        })
    }, [period, planPercent, firstInitialFee, date])

    console.log(installmentPlanData)

    // https://gitlabusername@gitlab.com/gitlab_user/myrepo.git  

    // https://muhammadxoja.itkey@gitlab.com/ibrohim.itkey/ikcrm-react.git 

    // https://muhammadxoja.itkey@gitlab.com/ibrohim.itkey/ikcrm-react.git

    // https://<muhammadxoja.itkey>@gitlab.com/gitlab_user/ibrohim.itkey/ikcrm-react.git

    // https://Muhammadxoja@gitlab.com/ibrohim.itkey/ikcrm-react.git/

    return (
        <div id="noneDownDrop">
            <div className="polniy_DropDown">
                <h3 className="sozdatImyaDropDowno">Период рассрочки</h3>
                <select
                    className="form-control sozdatImyaSpisokDropDown"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setPeriod(Math.round(e.target.value))}
                >
                    <option value="12">12</option>
                    <option value="18">18</option>
                </select>
            </div>
            <div className="polniy_DropDown">
                <h3 className="sozdatImyaDropDowno">
                    Процент по рассрочке
                </h3>
                <select
                    className="form-control sozdatImyaSpisokDropDown"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setPlanPercent(Math.round(e.target.value))}
                >
                    <option value="10">10</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div className="polniy_DropDown">
                <h3 className="sozdatImyaDropDowno">
                    Первоначальный взнос
                </h3>
                <input
                    className="form-control sozdatImyaSpisokDropDown"
                    type="text"
                    onChange={(e) => setFirstInitalFee(e.target.value)}
                />
            </div>
            <div className="polniy_DropDown">
                <h3 className="sozdatImyaDropDowno">
                    Дата начала рассрочки
                </h3>
                <input
                    id="dateInput3"
                    className="form-control sozdatImyaSpisokDropDown"
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
        </div>
    )
}

export default InstallmenPlan