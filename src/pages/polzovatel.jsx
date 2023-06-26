import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import editIcon from '../images/edit.png'
import eyeIcon from '../images/eye.png'
import deleteIcon from '../images/trash.png'
import bigXImage from '../images/X.png'
// components
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
// react-redux
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../store/features/userSlice.js"

function Polzovatel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const { users, isLoading } = useSelector((state) => state.user);

  return (
    <>
      <Sidebar />
      <div className="task">

        <div className="mainMargin">
          <Search />

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="panelUprText">Пользователи</h2>
              <NavLink to={'/newPolzovtel'} className="plus2">
                +
              </NavLink>
            </div>
            <div className="miniSearchDiv7Polzovatel">
              <div className='miniIonIconSearch'>
                <ion-icon
                  className="md hydrated miniSearchIconInput"
                  name="search-outline"
                  role="img"
                  aria-label="search outline"
                />
              </div>
              <input
                placeholder="Поиск по пользователям"
                className="miniInputSdelka6"
                type="text"
              />
            </div>
          </div>

          <div className="polzovatelData">
            <div className="jkMiniData2">
              <div className="checkboxDivInput">
                <input className="checkBoxInput" type="checkbox" />
              </div>
              <div className="checkboxDivInput">№</div>
              <div className="polzovatelFioElectronieAddres">Ф.И.О</div>
              <div className="polzovatelFioElectronieAddres">Электронный адресс</div>
              <div className="pozovatelFoto">Фото</div>

              <div className="checkboxDivTextInput4 polzovatelDeystvieMax">
                Действиe
              </div>

            </div>
            {isLoading ?
              users.map((user) => {
                return (
                  <div className="polzovatelMiniData">
                    <div className="polzovatelNumber">
                      <input className="checkBoxInput" type="checkbox" />
                    </div>
                    <div className="polzovatelNumber">{user.id}</div>
                    <div className="polzovatelFioElectronieAddres2">
                      Пользователев Пользователь <br /> Пользователивич
                    </div>
                    <div className="polzovatelFioElectronieAddres2">
                      polzovatel,polzovatel@gmail.com
                    </div>
                    <div className="pozovatelFoto2">
                      <img src={bigXImage} alt="X" />
                    </div>
                    <div className="polzovatelEditImg">
                      <div className="seaDiv" style={{ marginRight: 10 }}>
                        <img
                          style={{ marginTop: 4 }}
                          width={25}
                          height={25}
                          src={eyeIcon}
                          alt="Eye"
                          onClick={() => navigate('/profile')}
                        />
                      </div>
                      <div className="seaDiv" style={{ marginRight: 10 }}>
                        <img
                          className="mt-1"
                          width={20}
                          height={20}
                          src={editIcon}
                          alt="Edit"
                        />
                      </div>
                      <div className="seaDiv" style={{ marginRight: 10 }}>
                        <img
                          className="mt-1"
                          width={20}
                          height={20}
                          src={deleteIcon}
                          alt="Trash"
                        />
                      </div>
                    </div>
                  </div>
                )
              })
              : <>Loading...</>}

          </div>
        </div>
      </div>

    </>
  )
}

export default Polzovatel