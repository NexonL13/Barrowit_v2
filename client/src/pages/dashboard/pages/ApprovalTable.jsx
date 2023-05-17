import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

const ApprovalTable = () => {
  return (
    <div className="overflow-x-auto">
    <div>
      <h1 className="text-xl font-medium py-5">Assets Approval</h1>
    </div>
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Purpose</th>
        <th>Status</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Purpose 1</td>
        <td><span className='badge badge-sm badge-accent'>Pending</span></td>
        <td className='flex space-x-5'>
            <button className='btn bg-gray-500 border-none btn-sm rounded-full'><AiOutlineCheck/></button>
            <button className='btn bg-gray-500 border btn-sm bg-transparent text-gray-900 font-medium hover:text-white rounded-full'><RxCross1/></button>
        </td>
        <td><label htmlFor="purpose" className="badge badge-ghost badge-sm">View</label></td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Purpose 2</td>
        <td><span className='badge badge-sm badge-success text-white'>Approved</span></td>
        <td className='flex space-x-5'>
        <button className='btn bg-gray-500 border-none btn-sm rounded-full'><AiOutlineCheck/></button>
            <button className='btn bg-gray-500 border btn-sm bg-transparent text-gray-900 font-medium hover:text-white rounded-full'><RxCross1/></button>
        </td>
        <td><label htmlFor="purpose" className="badge badge-ghost badge-sm">View</label></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Purpose 3</td>
        <td><span className='badge badge-sm badge-success text-white'>Approved</span></td>
        <td className='flex space-x-5'>
        <button className='btn bg-gray-500 border-none btn-sm rounded-full'><AiOutlineCheck/></button>
            <button className='btn bg-gray-500 border btn-sm bg-transparent text-gray-900 font-medium hover:text-white rounded-full'><RxCross1/></button>
        </td>
        <td><label htmlFor="purpose" className="badge badge-ghost badge-sm">View</label></td>
      </tr>
    </tbody>
  </table>
  <input type="checkbox" id="purpose" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-xl">
    <h3 className="font-bold text-lg">Purpose</h3>
    <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, aliquid! Blanditiis atque nostrum fugit, officia doloribus impedit! Mollitia, debitis nostrum.</p>
    <div className="modal-action">
      <label htmlFor="purpose" className="btn">Close</label>
    </div>
  </div>
</div>
</div>
  )
}

export default ApprovalTable