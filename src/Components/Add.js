import React, { useState } from "react";
import Modal from "react-modal";
import './style.css'


const Add = ({AddMovie}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

const [handelTitle, setHandelTitle] = useState("")
const onChangeTitle=(e)=>{
  setHandelTitle(e.target.value)
}
const [handelDescription, setHandelDescription] = useState("")
const onChangeDescription=(e)=>{
  setHandelDescription(e.target.value)
}
const [handelURL, setHandelURL] = useState("")
const onChangeURL=(e)=>{
  setHandelURL(e.target.value)
}
const [handelrating, setHandelrating] = useState("")
const onChangerating=(e)=>{
  setHandelrating(e.target.value)
}
const adding=(e)=>{
  e.preventDefault();
  AddMovie(handelTitle, handelDescription, handelURL, handelrating)
  setHandelTitle("")
  setHandelDescription("")
  setHandelURL("")
  setHandelrating("")
}

  return (
    <div>
      <button onClick={openModal}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="addForm" onSubmit={adding}>
          <label>title:</label>
          <input type="text" 
           value={handelTitle} 
           onChange={onChangeTitle}      
          />
          <label>description:</label>
          <input type="text" 
          value={handelDescription} 
          onChange={onChangeDescription}  
          />
          <label>posterURL:</label>
          <input type="text" 
          value={handelURL} 
          onChange={onChangeURL}  
          />
          <label>rating:</label>
          <input type="number" max="5" min="1"
          value={handelrating} 
          onChange={onChangerating} 
          />
          <div>
            <button>add</button>
            <button onClick={closeModal}>cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Add;
