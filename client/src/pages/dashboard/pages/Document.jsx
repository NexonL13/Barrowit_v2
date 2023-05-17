import React from 'react'
import { AiOutlineFilePdf } from 'react-icons/ai'

const Document = () => {
  return (
    <div className="overflow-x-auto w-full">
      <div>
      <h1 className="text-xl font-medium py-5">Requesting Documents</h1>
    </div>
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox checkbox-accent border border-gray-300" />
          </label>
        </th>
        <th>Name</th>
        <th>Document</th>
        <th>PDF File</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox checkbox-accent border border-gray-300" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Alex Shatov</div>
              <div className="text-sm opacity-50">Address</div>
            </div>
          </div>
        </td>
        <td>
          Birth Certificate
          <br/>
          <span className="badge badge-info badge-sm">Pending</span>
        </td>
        <td><span className='text-3xl cursor-pointer'><AiOutlineFilePdf/></span></td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox checkbox-accent border border-gray-300" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Philip Harbach</div>
              <div className="text-sm opacity-50">Address</div>
            </div>
          </div>
        </td>
        <td>
          Certificate
          <br/>
          <span className="badge badge-error badge-sm">Cancelled</span>
        </td>
        <td><span className='text-3xl cursor-pointer'><AiOutlineFilePdf/></span></td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox checkbox-accent border border-gray-300" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Mirko Fisuk</div>
              <div className="text-sm opacity-50">Address</div>
            </div>
          </div>
        </td>
        <td>
          Clearance
          <br/>
          <span className="badge badge-success badge-sm">Done</span>
        </td>
        <td><span className='text-3xl cursor-pointer'><AiOutlineFilePdf/></span></td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox checkbox-accent border border-gray-300" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Olga Semklo</div>
              <div className="text-sm opacity-50">Address</div>
            </div>
          </div>
        </td>
        <td>
          Certificate
          <br/>
          <span className="badge badge-success badge-sm">Done</span>
        </td>
        <td><span className='text-3xl cursor-pointer'><AiOutlineFilePdf/></span></td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>PDF File</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
  )
}

export default Document