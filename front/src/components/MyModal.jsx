import React from "react";
import Modal from "react-modal";

const MyModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      className="bg-purple-400 w-2/4 justify-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="My dialog"
    >
      <div className="text-xl">Contacts</div>
      <p>
        {" "}
        Contact <button className="ms-10 bg-blue-500 rounded">
          Block
        </button>{" "}
        <button className="ms-4 bg-blue-500 rounded">Delete</button>
      </p>{" "}
      <br />
      <p>
        {" "}
        Contact <button className="ms-10 bg-blue-500 rounded">Block</button>
        <button className="ms-4 bg-blue-500 rounded">Delete</button>
      </p>{" "}
      <br />
      <p>
        {" "}
        Contact <button className="ms-10 bg-blue-500 rounded">Block</button>
        <button className="ms-4 bg-blue-500 rounded">Delete</button>
      </p>{" "}
      <br />
      <p>
        {" "}
        Contact <button className="ms-10 bg-blue-500 rounded">Block</button>
        <button className="ms-4 bg-blue-500 rounded">Delete</button>
      </p>{" "}
      <br />
      <button
        className="ms-20 bg-blue-500 rounded w-20"
        onClick={onRequestClose}
      >
        close
      </button>
    </Modal>
  );
};

export default MyModal;
