import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
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
// jotai
import { useComplexData } from '../hooks/useComplexData'
import { useAtom } from "jotai"


function SozdatJkDale() {
  const [complexData, setComplexData] = useAtom(useComplexData);
  const [room, setRoom] = useState(1);
  // const numberOfRooms = [1, 2, 3, 4, 5];

  console.log(complexData);

  if (complexData === null) {
    return;
  }

  const changeFlatRoomNumber = (lobbyId, floorId, flatId) => {
    console.log(lobbyId, floorId, flatId);
    const data = [...complexData]

    data.map((residentialComplex) => {
      residentialComplex?.lobby.map(block => {

        block.filter((lobby) => {
          if (lobby.id == lobbyId) {
            lobby?.floor.filter((floor) => {
              if (floor.id == floorId) {
                floor?.flat.map((flat) => {
                  if (flat.id == flatId) {
                    flat.room_count = room;
                  }
                })
              }
            })
          }
        })
      })
    })
    setComplexData(data);
  }

  return (
    <div>
      <div className="d-flex">
        <Sidebar />
        <div className="mainMargin">
          <Search />

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <NavLink
                to={'/newJk'}
                className="plus2 profileMaxNazadInformatsiyaKlient"
              >
                <img src={leftArrowIcon} alt="" />
              </NavLink>
              <h2 className="panelUprText">Создать новый ЖК</h2>
            </div>
          </div>

          <div className="sozdatJkDaleData">

            {complexData && complexData.map((residentialComplex) => {
              return (
                residentialComplex?.lobby.map((lobby) => {
                  return (
                    <div className="lobby_flats">
                      <div className="dalePodyedzEtaj">

                        {residentialComplex.flatAmount.map((index) => {
                          return (
                            <div className="lobby_flat_number">{index} этаж</div>
                          )
                        })

                        }
                      </div>

                      {lobby.map((blockElement, index) => {
                        return (
                          <div className="dalePodyedzBig2">

                            <h2 className="podyedzNameDale">Подъезд {blockElement.id}</h2>

                            {[...blockElement?.floor].reverse().map((floor) => {
                              return (
                                <div className="d-flex jk_floor">
                                  {floor?.flat.map((flat) => {
                                    return (
                                      <div onClick={() => changeFlatRoomNumber(blockElement.id, floor.id, flat.id)} className="podyedzNameDaleNol">{flat.room_count}</div>
                                    )
                                  })}
                                </div>
                              )
                            })}
                          </div>
                        )
                      })}

                    </div>
                  )
                })
              )
            })}

            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex">
                <button onClick={() => setRoom(1)} className="sozdatImyaSpisokSozdatButtonJkDale">
                  1 ком.
                </button>
                <button onClick={() => setRoom(2)} className="sozdatImyaSpisokSozdatButtonJkDale">
                  2 ком.
                </button>
                <button onClick={() => setRoom(3)} className="sozdatImyaSpisokSozdatButtonJkDale">
                  3 ком.
                </button>
                <button onClick={() => setRoom(4)} className="sozdatImyaSpisokSozdatButtonJkDale">
                  4 ком.
                </button>
                <button onClick={() => setRoom(5)} className="sozdatImyaSpisokSozdatButtonJkDale">
                  5 ком.
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-3">
              <div className="d-flex">
                <div className="podyedzNameDaleNol">0</div>
                <input
                  placeholder="Квартир к описанию"
                  type="text"
                  className="KvartirKopisaniyu"
                />
              </div>
            </div>
            <button
              type="submit"
              data-toggle="modal"
              data-target="#exampleModal"
              className="sozdatImyaSpisokSozdatButtonSave"
            >
              Сохранить
            </button>
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
              border: "none",
              backgroundColor: "#E8F0FF",
              width: 315,
              marginLeft: 185
            }}
          >
            <div className="modal-body">
              <div className="mt-3">
                <h3 className="sozdatJkSpisokH3722">Общая площадь</h3>
                <input type="text" className="modalMiniCapsule4 text-left" />
              </div>
              <div className="mt-3">
                <h3 className="sozdatJkSpisokH3722">Жилая площадь</h3>
                <input type="text" className="modalMiniCapsule4 text-left" />
              </div>
              <div className="mt-3">
                <h3 className="sozdatJkSpisokH3722">Площадь кухни</h3>
                <input type="text" className="modalMiniCapsule4 text-left" />
              </div>
              <div className="mt-3">
                <h3 className="sozdatJkSpisokH3722">
                  Терасса <input type="checkbox" />
                </h3>
                <input
                  type="text"
                  placeholder="Серия и номер"
                  className="modalMiniCapsule4 text-left"
                />
              </div>
              <div className="mt-3">
                <h3 className="sozdatJkSpisokH3722">
                  Балкон <input type="checkbox" />
                </h3>
                <input
                  type="text"
                  placeholder="Серия и номер"
                  className="modalMiniCapsule4 text-left"
                />
              </div>
              <div className="d-flex">
                <button className="plusFlexModalInformation">+</button>
                <h3 className="plusFlexModalInformationDobavitCvartir">
                  {" "}
                  Добавить квартиру
                </h3>
              </div>
              <a href="./jk.html" className="mdodalSaxranitSozdatJkDale">
                Сохранить
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SozdatJkDale