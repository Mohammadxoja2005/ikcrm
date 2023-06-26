import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import flagUzb from "../images/1200px-Flag_of_Uzbekistan.png";
import profileImage from "../images/Ellipse 1.png";
import britianFlag from "../images/GB.png";
import notificationIcon from "../images/notification.png";
import uzbRegion from "../images/region.png";
import ruRegion from "../images/RU.png";
import leftArrowIcon from "../images/icons/arrow-left.png";
// react-redux
import { useDispatch } from "react-redux";
import { createAllClient } from "../store/features/clientSlice";
// components
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
// react-toastify
import { ToastContainer, toast } from "react-toastify";

function SozdatLidi() {
  const dispatch = useDispatch();
  const createdNofication = () => toast("Клиент успешно добавлен");

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [middleName, setMiddleName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [source, setSource] = useState();
  const [status, setStatus] = useState(0);
  const [passport, setPassport] = useState();
  const [responsible, setResponsible] = useState();
  const [inn, setInn] = useState();

  const onSubmit = () => {
    // const formData = new FormData();
    // formData.append("first_name", name);
    // formData.append("last_name", lastName);
    // formData.append("middle_name", middleName);
    // formData.append("phone", phoneNumber);
    // formData.append("source", source);
    // formData.append("status", status);
    // formData.append("series_number", passport);
    // formData.append("looking_for", source);
    // formData.append("responsible", responsible);
    // formData.append("inn", inn);

    dispatch(createAllClient({
      first_name: name,
      last_name: lastName,
      middle_name: middleName,
      phone: phoneNumber,
      source: source,
      status: status,
      passport: passport,
      responsible: responsible,
      pinfl_inn: inn,
      last_active: ""
    })).then(() => {
      createdNofication();
    }).then(() => {
      setName('');
      setLastName('');
      setMiddleName('');
      setPhoneNumber('');
      setSource('');
      setPassport('');
      setResponsible('');
      setInn('');
    })
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <ToastContainer />
      <div className="mainMargin">
        <Search />

        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <NavLink
              to={"/allClients"}
              className="plus2 profileMaxNazadInformatsiyaKlient"
            >
              <img src={leftArrowIcon} alt="" />
            </NavLink>
            <h2 className="panelUprText">Создание нового клиента</h2>
          </div>
        </div>

        <div className="sozdatSpisokData">
          <form action="">
            <div className="sozdatImyaSpsok">
              <h3 className="sozdatImyaSpisokH3">Имя</h3>
              <input
                className="sozdatImyaSpisokInput"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="sozdatImyaSpsok">
              <h3 className="sozdatImyaSpisokH3">Фамилия</h3>
              <input
                className="sozdatImyaSpisokInput"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <div className="sozdatImyaSpsok">
              <h3 className="sozdatImyaSpisokH3">Отчество</h3>
              <input
                className="sozdatImyaSpisokInput"
                type="text"
                onChange={(e) => setMiddleName(e.target.value)}
                value={middleName}
              />
            </div>
            <div className="sozdatImyaSpsok">
              <h3 className="sozdatImyaSpisokH3">Номер телефона</h3>
              <div className="d-flex">
                <div>
                  <img src={uzbRegion} alt="Region" />
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
                      paddingLeft: 6,
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
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                </div>
              </div>
            </div>
            <div className="sozdatImyaSpsok">
              <h3 className="sozdatImyaSpisokH3">Источник</h3>
              <input
                className="sozdatImyaSpisokInput"
                type="text"
                onChange={(e) => setSource(e.target.value)}
                value={source}
              />
            </div>
            <div className="form-group">
              <h3 className="sozdatImyaSpisokH3">Статус</h3>
              <select
                className="form-control sozdatImyaSpisokSelectOption"
                id="exampleFormControlSelect1"
                onChange={(e) => setStatus(Math.round(e.target.value))}
              >
                <option value="1">Активный</option>
                <option value="0">Не Активный</option>
              </select>
            </div>
            <div className="sozdatImyaSpsok">
              <h3 className="sozdatImyaSpisokH3">Серийный номер паспорта</h3>
              <input
                className="sozdatImyaSpisokServerniyNomer"
                type="text"
                placeholder="AA1234567"
                onChange={(e) => setPassport(e.target.value)}
                value={passport}
              />
            </div>
            <div className="sozdatImyaSpsok">
              <h3 className="sozdatImyaSpisokH3">Кем выдан</h3>
              <input
                className="sozdatImyaSpisokInput"
                type="text"
                onChange={(e) => setResponsible(e.target.value)}
                value={responsible}
              />
            </div>
            <div className="sozdatImyaSpsok">
              <h3 className="sozdatImyaSpisokH3">ПИНФЛ или ИНН</h3>
              <input
                className="sozdatImyaSpisokPinfl"
                type="text"
                onChange={(e) => setInn(e.target.value)}
                value={inn}
              />
            </div>
            <div
              onClick={onSubmit}
              style={{ cursor: "pointer" }}
              className="sozdatImyaSpisokSozdatButton"
            >
              Создать
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SozdatLidi;
