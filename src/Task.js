import React, { useState } from "react";
import Modal from "./Modal.js";
import "./App.css";
import Pagination from "./Pagination.js";

const Task = () => {
  const datas = [
    {
      id: 1,
      name: "MS Dhoni",
      email: "msd@hvh.com",
      phone: "976665645",
      selected: false,
    },
    {
      id: 2,
      name: "virat kohli",
      email: "vk18@gukw.com",
      phone: "746849393",
      selected: false,
    },
    {
      id: 3,
      name: "Rohit Sharma",
      email: "rohit45g@hgk.com",
      phone: "885678933",
      selected: false,
    },
    {
      id: 4,

      name: "Ravindra jadeja",
      email: "rv67547@kjiio.com",
      phone: "688899354",
      selected: false,
    },
    {
      id: 5,
      name: "Jasprit bumrah",
      email: "jsgfij465@jdis.com",
      phone: "998700328",
      selected: false,
    },
    {
      id: 6,
      name: "Surya kumar",
      email: "sky@gcvxw.com",
      phone: "854429393",
      selected: false,
    },
    {
      id: 7,
      name: "Hardik Pandya",
      email: "hp345g@hgk.com",
      phone: "833377933",
      selected: false,
    },
    {
      id: 8,

      name: "Ravi Ashwin",
      email: "raviash7@kgrgro.com",
      phone: "682325934",
      selected: false,
    },
    {
      id: 9,
      name: " Mohammed Shami",
      email: "msj375@jdis.com",
      phone: "99863288",
      selected: false,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);


  const [Players, setPlayers] = useState(datas);
  const [fullchecked, setfullchecked] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [selectedPlayers, setselectedPlayers] = useState([]);
  const [modalData, setmodalData] = useState({});

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPlayers = Players.slice(firstPostIndex, lastPostIndex);

  const onSingleCheckbox = (e, item) => {
    let tempList = Players;
    tempList.map((player) => {
      if (player.id === item.id) {
        player.selected = e.target.checked;
      }
      return player;
    });

    const totalItems = Players.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    setfullchecked(
      (fullchecked) => (fullchecked = totalItems === totalCheckedItems)
    );
    setPlayers((Players) => (Players = tempList));
    setselectedPlayers(
      (selectedPlayers) => (selectedPlayers = Players.filter((e) => e.selected))
    );
  };

  const onHeaderCheckbox = (e) => {
    let tempList = Players;
    tempList.map((player) => (player.selected = e.target.checked));

    setfullchecked((fullchecked) => (fullchecked = e.target.checked));
    setPlayers((Players) => (Players = tempList));
    setselectedPlayers(
      (selectedPlayers) => (selectedPlayers = Players.filter((e) => e.selected))
    );
  };

  const handleDelete = (playerId) => {
    let deletedList = Players.filter(
      (singlePlayer) => singlePlayer.id !== playerId
    );
    setPlayers(deletedList);
  };
  const handleEdit = (playerId, player) => {
    setopenModal(true);

    // console.log(playerId,player);
    //console.log(openModal);
    setmodalData(player);
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                checked={fullchecked}
                onChange={(e) => onHeaderCheckbox(e)}
              />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPlayers.map((player) => (
            <tr key={player.id}>
              <th scope="row">
                <input
                  type="checkbox"
                  checked={player.selected}
                  onChange={(e) => onSingleCheckbox(e, player)}
                />
              </th>
              <td>{player.name}</td>
              <td>{player.email}</td>
              <td>{player.phone}</td>
              <td>
                <button onClick={() => handleEdit(player.id, player)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(player.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && <Modal modalData={modalData} closemodal={setopenModal} />}
      <br></br>
      <Pagination
                totalPosts={Players.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <br></br>
      {selectedPlayers.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  checked={fullchecked}
                  onChange={(e) => onHeaderCheckbox(e)}
                />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedPlayers.map((player) => (
              <tr key={player.id}>
                <th scope="row">
                  <input
                    type="checkbox"
                    checked={player.selected}
                    onChange={(e) => onSingleCheckbox(e, player)}
                  />
                </th>
                <td>{player.name}</td>
                <td>{player.email}</td>
                <td>{player.phone}</td>
                <td>
                  <button onClick={() => handleEdit(player.id, player)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(player.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Task;
