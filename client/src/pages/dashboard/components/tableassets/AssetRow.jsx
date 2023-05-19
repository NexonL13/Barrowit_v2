import React from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const AssetRow = ({ asset, setAsset }) => {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox checkbox-accent border border-gray-300"
            />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={`/src/images/${asset.image}`} alt="img" />
              </div>
            </div>
            <div>
              <div className="font-bold">{asset.name}</div>
              <div className="badge badge-ghost badge-sm">{asset.category}</div>
            </div>
          </div>
        </td>
        <td>{asset.description}</td>
        <td>{asset.stock}</td>
        <td>{asset.sponsor}</td>
        <th>
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => navigate(`/dashboard/update/${asset.id}`)}
          >
            <div className="text-2xl text-blue-700">
              <RiEdit2Line />
            </div>
          </button>
          <label htmlFor="delete-modal" className="btn btn-ghost btn-xs " onClick={() => setAsset(asset)}>
            <div className="text-2xl text-red-700">
              <RiDeleteBin6Line />
            </div>
          </label>
        </th>
      </tr>
      </>
  );
};

export default AssetRow;
