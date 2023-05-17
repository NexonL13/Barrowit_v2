import React from "react";
import axios from "axios";

const DeleteModal = ({id, name, description, setIsDelete}) => {

  const deleteAsset = async () => {

    await axios.delete(`http://localhost:3000/asset/${id}`).then(() =>{
        setIsDelete(prev =>!prev)
    })
  }

  return (
    <>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {`Are you sure you want to delete "${name}" ?`} 
          </h3>
          <p className="py-4">
            {description}
          </p>
          <div className="modal-action">
            <label htmlFor="delete-modal" className="btn bg-green-600 border-none hover:bg-green-400" onClick={deleteAsset}>
             Confirm
            </label>
            <label htmlFor="delete-modal" className="btn bg-transparent text-green-600 border border-green-600 hover:bg-green-600 hover:text-white">
             Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
