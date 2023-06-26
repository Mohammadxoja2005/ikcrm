import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks } from '../store/features/taskSlice';

function TaskBoard() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasks());
    }, [])

    const { tasks, isLoading } = useSelector((state) => state.task);

    return (
        <div className="zadachiData">
            <div className="zadachiJustify">
                {isLoading ?
                    tasks && tasks.map((task) => {
                        return (
                            <div key={task.id} className="task_board" draggable={true}>
                                <div className="zadachiRed zadachiMarginRight">
                                    <h3 className="zadachiRedH3">{task.title}</h3>
                                    <p className="zadachiRedP">Всего задач: {task.list.length}</p>
                                </div>
                                {task.list.map((taksList) => {
                                    return (
                                        <div
                                            draggable={true}
                                            key={taksList.id}
                                            to={'/informatsiyaKlienti'}
                                            className="zadachiBlueName zadachiMarginRight"
                                            style={{ marginTop: "20px", marginBottom: "15px" }}
                                        >
                                            <p className="zadachiSenderName">
                                                Ответственный: <b>{taksList.responsible}</b>
                                            </p>
                                            <h3 className="zadachiBlueNameZ">
                                                {taksList.client}
                                            </h3>
                                            <p className="zadachiBlueTime">
                                                Дата: {taksList.day} <br /> Время: {taksList.time}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }) : <div>Loading...</div>}
            </div>
        </div>
    )
}

export default TaskBoard