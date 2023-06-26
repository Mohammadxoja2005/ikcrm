import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// react-redux
import { useSelector, useDispatch } from "react-redux";
import { getDeals, changeDealStatus } from "../store/features/dealSlice";
import { current } from "@reduxjs/toolkit";

function DealBoard() {
  const dispatch = useDispatch();

  const [currentBoard, setCurrentBoard] = useState();
  const [currentDraggedElement, setCurrentDraggedElement] = useState();
  const [droppingBoard, setDroppingBoard] = useState();

  const [boardId, setBoardId] = useState();
  const [taskId, setTaskId] = useState();

  const [changableData, setChangableData] = useState([
    {
      id: 1,
      title: "Первый контакт",
      items: [
        {
          id: 1,
          manager: "Менеджеров Менеджер",
          client: "Клиентов Клиент Клиентович",
          date: "01.01.2023",
          time: "15:45:10",
        },
        {
          id: 2,
          manager: "Менеджеров Менеджер",
          client: "Клиентов Клиент Клиентович",
          date: "01.01.2023",
          time: "15:45:10",
        },
        {
          id: 3,
          manager: "Hello world",
          client: "Клиентов Клиент Клиентович",
          date: "01.01.2023",
          time: "15:45:10",
        },
      ],
    },
    {
      id: 2,
      title: "Переговоры",
      items: [
      ],
    },
    {
      id: 3,
      title: "Уже делается сделка",
      items: [
        {
          id: 4,
          manager: "Hello world",
          client: "Клиентов Клиент Клиентович",
          date: "01.01.2023",
          time: "15:45:10",
        },
      ],
    },
  ]);

  useEffect(() => {
    dispatch(getDeals());
  }, []);

  const deals = useSelector((state) => state.deal.deals);
  const isLoading = useSelector((state) => state.deal.isLoading);

  const data = [];

  // const dragOver = (e, board) => {
  //   e.preventDefault();
  // };


  const dragStart = (e, board, draggedElement) => {
    // console.log(board.id);
    // console.log(draggedElement);

    // setBoardId(board.id);
    // setTaskId(draggedElement.id);

    setCurrentBoard(board);
    setCurrentDraggedElement(draggedElement);
    // e.target.style.opacity = "0"
  };

  const dragElementOver = (e, dragElement) => {
    e.target.style.boxShadow = "3px 3px 2px 0px rgba(0, 0, 0, 1)";
  }

  const dragLeave = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = "none";
  };

  const dragEnd = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dropTask = (e, board, draggedElement) => {
    // data.push(...changableData);

    // if (currentBoard == undefined) return;

    // const currentIndex = currentBoard.items.indexOf(currentDraggedElement);

    // if (currentBoard.title !== board.title && currentIndex != -1) {
    //   data.forEach((item) => {
    //     if (item.title == currentBoard.title) {
    //       item.items.splice(currentIndex, 1);
    //     }
    //     if (item.title === board.title) {
    //       item.items.push(currentDraggedElement);
    //     }
    //   });
    // }
    // setChangableData(data);

    // console.log("draggedBoardId", boardId, "taskId", taskId);
    // console.log("droppedBoardId", board.title);

    // if (boardId != board.id) {
    //   switch (board.title) {
    //     case "First contact":
    //       {
    //         dispatch(changeDealStatus({ id: taskId, type: 1 }));
    //       }
    //       break;
    //     case "Negotiation":
    //       {
    //         dispatch(changeDealStatus({ id: taskId, type: 2 }));
    //       }
    //       break;
    //     case "Making a deal":
    //       {
    //         dispatch(changeDealStatus({ id: taskId, type: 3 }));
    //       }
    //       break;
    //   }
    // }
  };

  const dropBoard = (e, dropBoard) => {
    e.preventDefault();

    const allLeads = document.querySelectorAll(".lidiOfficial");

    allLeads.forEach((lead) => {
      lead.style.boxShadow = "none";
    })

    if (dropBoard === undefined || currentBoard === undefined) return;

    // console.log('dropBoard.id', droppingBoard.id, 'current', currentBoard.id)

    changableData.forEach((board) => {
      if (board.id === dropBoard.id) {
        const clonedElement = { ...currentDraggedElement };
        board.items.push(clonedElement);
        console.log("push");
      }

      if (board.id === currentBoard.id) {
        const draggedElementIndex = board.items.indexOf(currentDraggedElement);
        board.items.splice(draggedElementIndex, 1);
        console.log("delete");
      }

    });

    setChangableData([...changableData]);
  };

  return (
    <div className="zadachiData">
      <div className="d-flex">
        {isLoading ? (
          changableData &&
          changableData.map((board) => {
            return (
              <div
                key={board.id}
                className="first_deal_phase"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => dropBoard(e, board)}
              // draggable
              >
                <div
                  className="lidiRed"
                  style={{ background: `${board.class}` }}
                >
                  {board.title}
                </div>
                <div className="d-flex flex-column mt-2">
                  {board.items &&
                    board.items.map((dragElement) => {
                      return (
                        <div
                          // onClick={() => console.log(board)}
                          key={dragElement.id}
                          className="lidiOfficial lidiMarginRight"

                          onDragOver={(e) => dragElementOver(e, dragElement)}
                          onDragLeave={(e) => dragLeave(e)}
                          onDragStart={(e) => dragStart(e, board, dragElement)}
                          onDragEnd={(e) => dragEnd(e)}
                          // onDrop={(e) => dropBoard(e, board)}
                          draggable
                        >
                          <p className="zadachiSenderName">
                            Ответственный:{" "}
                            <b>
                              {/* {dragElment.responsible_first_name}{" "}
                              {dragElment.responsible_last_name}{" "}
                              {dragElment.responsible_middle_name} */}
                            </b>
                          </p>
                          <h3 className="lidiClientov">
                            {/* {dragElment.client_first_name}{" "}
                            {dragElment.client_last_name}{" "}
                            {dragElment.client_middle_name} */}
                          </h3>
                          <p className="zadachiBlueTime">
                            {/* Дата: {dragElment.day} <br /> Время: */}
                            {/* {dragElment.time} */}
                            {/* {dragElment.time} */}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}

        {/* <div className="first_deal_phase">
          <div className="lidiRed">Первый контакт</div>
          <div className="d-flex flex-column mt-2">
            <div className="lidiOfficial lidiMarginRight" draggable>
              <p className="zadachiSenderName">
                Ответственный: <b>Менеджеров Менеджер</b>
              </p>
              <h3 className="lidiClientov">Клиентов Клиент Клиентович</h3>
              <p className="zadachiBlueTime">
                Дата: 01.01.2023 <br /> Время: 15:45:10
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="second_deal_phase">
          <div className="lidiYellow">Переговоры</div>
          <div className="d-flex flex-column mt-2">
            <div className="lidiOfficial lidiMarginRight">
              <p className="zadachiSenderName">
                Ответственный: <b>Менеджеров Менеджер</b>
              </p>
              <h3 className="lidiClientov">Клиентов Клиент Клиентович</h3>
              <p className="zadachiBlueTime">
                Дата: 01.01.2023 <br /> Время: 15:45:10
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="third_deal_phase">
          <div className="lidiGreen">Оформление сделки</div>
          <div className="d-flex flex-column mt-2">
            <div className="lidiOfficial lidiMarginRight">
              <p className="zadachiSenderName">
                Ответственный: <b>Менеджеров Менеджер</b>
              </p>
              <h3 className="lidiClientov">Клиентов Клиент Клиентович</h3>
              <p className="zadachiBlueTime">
                Дата: 01.01.2023 <br /> Время: 15:45:10
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default DealBoard;
