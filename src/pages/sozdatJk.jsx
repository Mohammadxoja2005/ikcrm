import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import flagUzb from '../images/1200px-Flag_of_Uzbekistan.png'
import profileImage from '../images/Ellipse 1.png'
import britianFlag from '../images/GB.png'
import notificationIcon from '../images/notification.png'
import uzbRegion from '../images/region.png'
import ruRegion from '../images/RU.png'
import leftArrowIcon from '../images/icons/arrow-left.png'
// components
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
// react-redux
import { useSelector, useDispatch } from "react-redux";
import { createResidentialComplex } from "../store/features/residentialComplexSlice";
// jotai 
import { useComplexData } from '../hooks/useComplexData'
import { useAtom } from 'jotai'

function SozdatJk() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [corpus, setCorpus] = useState(null);
  const [status, setStatus] = useState(0);
  const [description, setDescription] = useState(null);

  const [lobbyAmount, setLobbyAmount] = useState(null);
  const [floorAmount, setFloorAmount] = useState(null);
  const [flatAmountInLobby, setFlatAmountInLobby] = useState(null);
  const [flatAmountInFloor, setFlatAmountInFloor] = useState(null);
  const [flatAmount, setFlatAmount] = useState(null);

  const [complexData, setComplexData] = useAtom(useComplexData)


  function createComplexData(numLobbies, numFloors, numFlats) {
    const data = [];
    const lobby = [];

    for (let lobbyId = 1; lobbyId <= numLobbies; lobbyId++) {
      const floor = [];
      for (let floorId = 1; floorId <= numFloors; floorId++) {
        const flats = [];

        for (let flatId = 1; flatId <= numFlats; flatId++) {
          const flat = {
            id: flatId,
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
            room_count: 0
          };

          flats.push(flat);
        }

        floor.push({
          id: floorId,
          flat: [...flats]
        });

      }

      lobby.push({
        id: lobbyId,
        floor: floor,
      });
    }

    const flatArr = [];

    for (let i = flatAmount; i >= 1; --i) {
      flatArr.push(Math.round(i));
    }

    data.push({
      complex_id: Math.round(Math.random() * 120),
      lobby: groupLobby(lobby),
      flatAmount: flatArr
    });

    return data;
  }

  function groupLobby(lobby) {
    const groupedLobby = [];

    for (let i = 0; i < lobby.length; i += 3) {
      const group = lobby.slice(i, i + 3);
      groupedLobby.push(group);
    }

    return groupedLobby;
  }

  const createComplex = (e, createComplexData) => {
    e.preventDefault();

    dispatch(createResidentialComplex({ name, corpus, status, description }))
      .then(() => {
        const data = createComplexData(lobbyAmount, floorAmount, flatAmountInFloor);
        setComplexData(data);
      }).then(() => {
        navigate('/newJkDale')
      })
  }

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
              <h2 className="panelUprText">Создать новый ЖК</h2>
            </div>
          </div>

          <div className="sozdatJkData">
            <form action="">
              <div className="sozdatImyaSpsok">
                <h3 className="sozdatImyaSpisokH3">Наименование жк</h3>
                <input className="sozdatImyaSpisokInput" type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="sozdatImyaSpsok">
                <h3 className="sozdatImyaSpisokH3">Корпус</h3>
                <input className="sozdatImyaSpisokKorpus" type="text" onChange={(e) => setCorpus(e.target.value)} />
              </div>
              <div className="form-group">
                <h3 className="sozdatImyaSpisokH3">Статус объекта</h3>
                <select
                  className="form-control sozdatImyaSpisokSelectOption2"
                  id="exampleFormControlSelect1"
                  onChange={(e) => setStatus(Math.round(e.target.value))}
                >
                  <option value="0">Проектирование</option>
                  <option value="1">На этапе фундамента</option>
                  <option value="2">На этапе предпродаж</option>
                  <option value="3">Старт официальных продаж</option>
                </select>
              </div>
              <div className="sozdatImyaSpsok">
                <h3 className="sozdatImyaSpisokH3">Описание объекта</h3>
                <input className="sozdatImyaSpisokInput" type="text" onChange={(e) => setDescription(e.target.value)} />
              </div>

              <div className="sozdatJkFlex">
                <div>
                  <div className="sozdatImyaSpsok widthSozdatJk2">
                    <h3 className="sozdatJkSpisokH3">Количество подъездов</h3>
                    <input className="sozdatImyaSpisokKorpus" type="text" onChange={(e) => setLobbyAmount(e.target.value)} />
                  </div>
                  <div className="sozdatImyaSpsok widthSozdatJk">
                    <h3 className="sozdatJkSpisokH3">Этажей</h3>
                    <input className="sozdatImyaSpisokKorpus" type="text" onChange={(e) => setFloorAmount(e.target.value)} />
                  </div>
                  <div className="sozdatImyaSpsok">
                    <h3 className="sozdatJkSpisokH3">
                      Количество квартир в подъезде
                    </h3>
                    <input className="sozdatImyaSpisokKorpus" type="text" onChange={(e) => setFlatAmountInLobby(e.target.value)} />
                  </div>
                </div>
                <div>
                  <div className="sozdatImyaSpsok">
                    <h3 className="sozdatJkSpisokH3">
                      Количество квартир на одном этаже
                    </h3>
                    <input
                      className="sozdatImyaSpisokKorpus marginRightSozdatJkKolichistva"
                      type="text"
                      onChange={(e) => setFlatAmountInFloor(e.target.value)}
                    />
                  </div>
                  <div className="sozdatImyaSpsok sozdatJkLast">
                    <h3 className="sozdatJkSpisokH3">Всего квартир</h3>
                    <input className="sozdatImyaSpisokKorpus" type="text" onChange={(e) => setFlatAmount(e.target.value)} />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="sozdatImyaSpisokSozdatButton"
                onClick={(e) => createComplex(e, createComplexData)}
              >
                Далее
              </button>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default SozdatJk