import axios from 'axios'
import React from 'react'

const DeleteModal = ({ listOfAssets, setListOfAssets, asset}) => {

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:3000/asset/${id}`).then(()=> {
      const filteredListOfAssets = listOfAssets.filter(asset => asset.id !== id)
      setListOfAssets(filteredListOfAssets)
    })
  }
  return (
    <>
    <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure?
          </h3>
          <p className="py-4">
            {`Do you really want to delete this ${asset.name} asset? 
            This process cannot be undone.`}
          </p>
          <div className="modal-action">
            <label htmlFor="delete-modal" className="btn" onClick={() => deleteHandler(asset.id)}>
              Confirm
            </label>
            <label htmlFor="delete-modal" className="btn">
                Close
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteModal