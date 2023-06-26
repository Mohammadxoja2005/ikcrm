import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import TaskBoard from '../components/TaskBoard'
// components
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
import { createTask } from '../store/features/taskSlice'
// react-toastify
import { ToastContainer, toast } from 'react-toastify';

function Zadachi() {
  const dispatch = useDispatch();
  const [client, setClient] = useState('');
  const [taskDate, setTaskDate] = useState('0');
  const [forWho, setForWho] = useState('0');
  const [task, setTask] = useState('0');

  const taostNotification = () => toast("Заполните все поля");

  const submitCreatedTask = (e) => {
    e.preventDefault();
    if (taskDate == '0' || forWho == '0' || task == '0' || client.length == 0) {
      taostNotification()
      return;
    }

    dispatch(createTask({ responsible: forWho, client: client, day: taskDate, task: task }));
  }

  return (
    <div>
      <ToastContainer />
      <Sidebar />
      <div className="task">
        <div className="mainMargin">
          <Search />
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="panelUprText">Задачи</h2>
              <button
                data-toggle="modal"
                data-target="#exampleModal"
                type="button"
                className="plus2"
              >
                +
              </button>
              <NavLink to={'/calendar'} className="kalendarButton">
                Календарь
              </NavLink>
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

          <TaskBoard />

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
            <div className="modal-content ZadachiModalBody">
              <div className="modal-body">
                <input onChange={(e) => setClient(e.target.value)} className="zadachiClient" placeholder="Клиент" type="text" />
                <div className="zadachiBigClientInformation">
                  <div className="textareZadachi" contentEditable="true">
                    <div className="btn-group dropup">

                      {/* <button
                        type="button"
                        className="d-flex chatDropDown"
                      // data-toggle="dropdown"
                      >
                        <div className="smsDlya">
                          <div className="cliendZadachiNaZaftraText">
                            Задача на <span>Завтра</span> для Магомед:
                            <img src="../images/Call.png" alt="Phone Calling" />
                            Позвонить:
                          </div>
                        </div>
                      </button> */}

                      <div className='task_create_option_container'>
                        <div className='task_create_option'>
                          Задача на
                          <select onChange={(e) => setTaskDate(e.target.value)} name="" id="">
                            <option value="0">Выберете дату задачи</option>
                            <option value="1">Завтра</option>
                            <option value="2">Сегодня</option>
                            <option value="3">Завтра</option>
                            <option value="4">Следующую неделю</option>
                          </select>
                        </div>
                        <div className='task_create_option'>
                          Для
                          <select onChange={(e) => setForWho(e.target.value)} name="" id="">
                            <option value="0">Выберете кто будет делать задачи</option>
                            <option value="1">Магомед</option>
                            <option value="2">Абрахам</option>
                            <option value="3">Рауф</option>
                          </select>
                        </div>
                        <div className='task_create_option'>
                          Задача
                          <select onChange={(e) => setTask(e.target.value)} name="" id="">
                            <option value="0">Выберете задачу</option>
                            <option value="1">Позвонить</option>
                            <option value="2">Переговор</option>
                            {/* <option value="">dsadsa</option> */}
                          </select>
                        </div>
                        {/* <div className='task_create_option'>
                          <select name="" id="">
                            <option value="">sdas</option>
                            <option value="">das</option>
                            <option value="">dsadsa</option>
                          </select>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div contentEditable="false" className="d-flex textareaButttonSend">
                    <button onClick={submitCreatedTask} className="PostavitButton" data-dismiss="modal">
                      Поставить
                    </button>
                    <button className="OtmenitButton" data-dismiss="modal">
                      Отменить
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Zadachi