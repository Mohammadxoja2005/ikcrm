import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import uzbRegion from '../images/uzb_flag.png'
import leftArrowIcon from '../images/icons/arrow-left.png'
// components 
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import InstallmentPlan from '../components/InstallmentPlan'
// react-redux
import { useSelector, useDispatch } from 'react-redux';
// client-slice
import { createDealClient } from '../store/features/clientSlice';
import { createInstallmentPlan } from '../store/features/installmentPlanSlice'
import { getComplexes } from '../store/features/residentialComplexSlice';
// react-toastify
import { ToastContainer, toast } from 'react-toastify';
// jotai 
import { useAtom } from "jotai";
import { useInstallmentPlan } from '../hooks/useInstallmentPlan';

function Prodno() {
  const dispatch = useDispatch();

  const createdNofication = () => toast("Клиент успешно добавлен");

  const [installmentPlanData, setInstallmentPlanData] = useAtom(useInstallmentPlan);

  const [complexId, setComplexId] = useState(null);
  const [flatNumber, setFlatNumber] = useState(null);
  const [flatDes, setFlatDes] = useState(null);
  const [conNumber, setConNumber] = useState(null);
  const [date, setDate] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [gender, setGender] = useState(0);
  const [passport, setPassport] = useState(null);
  const [responsible, setResponsible] = useState(null);
  const [regByPassport, setRegByPassport] = useState(null);
  const [pinn, setPinn] = useState(null);
  const [phone, setPhone] = useState(null);
  const [file, setFile] = useState(null);
  const [regNumber, setRegNumber] = useState(null);
  const [price, setPrice] = useState(null);
  const [instPlan, setInstPlan] = useState(false);

  useEffect(() => {
    dispatch(getComplexes());
  }, [])

  const complexIds = useSelector((state) => state.residentialComplex.complexes);
  const isLoading = useSelector((state) => state.residentialComplex.isLoading);

  const createClient = (e) => {
    e.preventDefault();

    // const formData = new FormData();

    // formData.append('complex_id', complexId);
    // formData.append('flat_number', flatNumber);
    // formData.append('description', flatDes);
    // formData.append('contract_number', conNumber);
    // formData.append('date', date);
    // formData.append('full_name', fullName);
    // formData.append('gender', gender);
    // formData.append('passport', passport);
    // formData.append('reponsible_person', responsible);
    // formData.append('registration_by_passport', regByPassport);
    // formData.append('pinfl_inn', pinn);
    // formData.append('phone', phone);
    // formData.append('file', file);
    // formData.append('register_number', regNumber);
    // formData.append('sum', price);
    // formData.append('installment_plan', instPlan);
    // formData.append('status', "First contact");

    dispatch(createDealClient({
      complex_id: complexId,
      flat_number: flatNumber,
      description: flatDes,
      contract_number: conNumber,
      date: date,
      full_name: fullName,
      gender: gender,
      passport: passport,
      reponsible_person: responsible,
      registration_by_passport: regByPassport,
      pinfl_inn: pinn,
      file: file,
      phone: phone,
      register_number: regNumber,
      sum: price,
      installment_plan: instPlan,
      status: "First contact"
    }))
      .then(() => {
        installmentPlanData.client_full_name = fullName;
        installmentPlanData.phone = phone;
        installmentPlanData.flat_number = flatNumber;
        installmentPlanData.passport = passport;

        dispatch(createInstallmentPlan(installmentPlanData))
      })
      .then(() => {
        createdNofication();
      })
      .then(() => {
        setComplexId('');
        setFlatNumber('');
        setFlatDes('');
        setConNumber('');
        setFullName('');
        setGender(0);
        setPassport('');
        setResponsible('');
        setRegByPassport('');
        setPinn('');
        setPhone('');
        setRegNumber('');
        setPrice('');
      })
  }

  return (
    <div className="d-flex" >
      <ToastContainer />

      <Sidebar />

      {isLoading ?
        <div className="mainMargin">
          <Search />

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <NavLink
                to={'/sdelko'}
                className="plus2 profileMaxNazadInformatsiyaKlient"
              >
                <img src={leftArrowIcon} alt="" />
              </NavLink>
              <h2 className="panelUprText">Продажа</h2>
            </div>
          </div>

          <div className="sozdatSpisokData">
            <form action="">
              <div className="d-flex justify-content-between">
                <div>
                  <h3 className="prodnoDataH5Text">Описание объекта</h3>
                  <div className="form-group">
                    <h3 className="sozdatImyaSpisokH3Prodno">ЖК</h3>
                    <select
                      className="form-control sozdatImyaSpisokSelectOptionJkProdno"
                      id="exampleFormControlSelect1"
                      value={complexId}
                      onChange={(e) => setComplexId(e.target.value)}
                    >
                      <option value="">выберите</option>
                      {complexIds.map((complex) => (
                        <option key={complex.id} value={complex.id}>{complex.id}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <h3 className="sozdatImyaSpisokH3Prodno">Номер квартиры</h3>
                    <input
                      type="text"
                      className="form-control sozdatImyaSpisokSelectOptionJkProdno"
                      onChange={(e) => setFlatNumber(e.target.value)}
                      value={flatNumber}
                    />
                  </div>
                  <div className="sozdatImyaSpsok">
                    <h3 className="sozdatImyaSpisokH3Prodno">Описание</h3>
                    <input
                      className="sozdatImyaSpisokInputProdnoBig form-control"
                      placeholder="Краткое описание ЖК"
                      type="text"
                      onChange={(e) => setFlatDes(e.target.value)}
                      value={flatDes}
                    />
                  </div>
                  <div className="displayNoneProdnoMobile">
                    <div className="form-group">
                      <h3 className="sozdatImyaSpisokH3Prodno">Номер договора</h3>
                      <input
                        type="text"
                        className="form-control sozdatImyaSpisokSelectOptionJkProdno"
                        onChange={(e) => setConNumber(e.target.value)}
                        value={conNumber}
                      />
                    </div>
                    <div className="form-group" style={{ marginLeft: 10 }}>
                      <h3 className="sozdatImyaSpisokH3Prodno">Дата</h3>
                      <input
                        id="dateInput2"
                        placeholder="12.12.2022"
                        type="date"
                        className="form-control sozdatImyaSpisokSelectOptionJkProdnoDate"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <h3 className="prodnoDataH5Text">Паспортные данные клиента</h3>
                  <div className="sozdatImyaSpsok">
                    <h3 className="sozdatImyaSpisokH3Prodno">Полное имя</h3>
                    <input
                      className="sozdatImyaSpisokInputProdnoBig form-control"
                      type="text"
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullName}
                    />
                  </div>
                  <div className="form-group">
                    <h3 className="sozdatImyaSpisokH3Prodno">Пол</h3>
                    <select
                      className="form-control sozdatImyaSpisokSelectOptionJkProdno"
                      id="exampleFormControlSelect1"
                      onChange={(e) => setGender(Math.round(e.target.value))}
                    >
                      <option value="0">Мужской</option>
                      <option value="1">Женский</option>
                    </select>
                  </div>
                  <div className="sozdatImyaSpsok">
                    <h3 className="sozdatImyaSpisokH3Prodno">
                      Серийный номер паспорта
                    </h3>
                    <input
                      className="sozdatImyaSpisokInputProdnoBig form-control"
                      type="text"
                      onChange={(e) => setPassport(e.target.value)}
                      value={passport}
                    />
                  </div>
                  <div className="sozdatImyaSpsok">
                    <h3 className="sozdatImyaSpisokH3Prodno">
                      Кем выдан (Дата выдачи и дата окончания срока)
                    </h3>
                    <input
                      className="sozdatImyaSpisokInputProdnoBig form-control"
                      type="text"
                      onChange={(e) => setResponsible(e.target.value)}
                      value={responsible}
                    />
                  </div>
                  <div className="sozdatImyaSpsok">
                    <h3 className="sozdatImyaSpisokH3Prodno">Прописка по паспорту</h3>
                    <input
                      className="sozdatImyaSpisokInputProdnoBig form-control"
                      type="text"
                      onChange={(e) => setRegByPassport(e.target.value)}
                      value={regByPassport}
                    />
                  </div>
                  <div className="sozdatImyaSpsok">
                    <h3 className="sozdatImyaSpisokH3Prodno">ПИНФЛ или ИНН</h3>
                    <input className="sozdatImyaSpisokInputProdnoBig" type="text"
                      onChange={(e) => setPinn(e.target.value)}
                      value={pinn}
                    />
                  </div>
                  <h3 className="prodnoDataH5Text">Контактные данные</h3>
                  <div className="sozdatImyaSpsok">
                    <h3 className="sozdatImyaSpisokH3Prodno">Номер телефона</h3>
                    <div className="d-flex ">
                      <div>
                        <img src={uzbRegion} alt="Region" />
                      </div>
                      <div className='ml-2'>
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
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <label className="login_file">
                      <input
                        className="login_file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                      <div className="d-flex">
                        <button className="dobavitFotoPolzovatel">+</button>
                        <h5 className="dobavitFotoTextPolzovatel">Прикрепить файл</h5>
                      </div>
                    </label>
                  </div>

                </div>
                <div
                  className="d-flex prodnoRightImportData"
                  style={{ marginTop: 40 }}
                >
                  <div>
                    <div className="form-group">
                      <h3 className="sozdatImyaSpisokH3Prodno">Реестровый номер</h3>
                      <select
                        className="form-control sozdatImyaSpisokSelectOptionJkProdno"
                        id="exampleFormControlSelect1"
                        onChange={(e) => setRegNumber(e.target.value)}
                        value={regNumber}
                      >
                        <option value="">Выберете реестровый номер</option>
                        <option value="000171">000171</option>
                      </select>
                    </div>
                    <div className="form-group" style={{ marginRight: 30 }}>
                      <h3 className="sozdatImyaSpisokH3Prodno">Цена</h3>
                      <input
                        type="text"
                        className="form-control sozdatImyaSpisokSelectOptionJkProdno"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                      />
                    </div>
                    <div>
                      <label className="rassrochkaProdnoCheckBox7">
                        <div className="d-flex flexDropdownRassrochka mt-1">
                          <input
                            className="rassrochkaProdnoCheck mt-2"
                            type="checkbox"
                            name=""
                            id=""
                            onChange={(e) => e.target.checked ? setInstPlan(true) : setInstPlan(false)}
                          />
                          Рассрочка
                        </div>

                        {instPlan
                          ?
                          <InstallmentPlan />
                          : null}

                      </label>
                    </div>
                  </div>
                  {/* <div className="displayNoneProdno">
          <div className="form-group">
            <h3 className="sozdatImyaSpisokH3Prodno">Номер договора</h3>
            <input
              type="text"
              className="form-control sozdatImyaSpisokSelectOptionJkProdno"
              onChange={(e) => setConNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <h3 className="sozdatImyaSpisokH3Prodno">Дата</h3>
            <input
              id="dateInput"
              placeholder="12.12.2022"
              type="date"
              className="form-control sozdatImyaSpisokSelectOptionJkProdnoDate"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div> */}
                </div>
              </div>

              <button
                type="submit"
                className="sozdatImyaSpisokSozdatButtonSave text-light"
                onClick={createClient}
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        : <div>Loading...</div>}

    </div >
  )
}

export default Prodno