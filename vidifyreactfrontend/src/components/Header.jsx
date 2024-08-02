import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaBars,
  FaLessThanEqual,
} from "react-icons/fa";
import Modal from "./Modal";
import SearchComponent from "./SearchComponent";

export default function Header({ isSideBarOpen, setIsSideBarOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <div className="left" onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        {isSideBarOpen ? (
          <FaLessThanEqual className="icon" />
        ) : (
          <FaBars className="icon" />
        )}

        <span className="logo">Vidify</span>
      </div>
      <div className="right">
        <FaSearch className="icon" onClick={toggleModal} />
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <SearchComponent />
      </Modal>
    </header>
  );
}
