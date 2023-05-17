import React, { useState, useEffect } from 'react'
import axios from 'axios';
import no_data from '../../../assets/images/no_data.svg'
const AuditTrail = () => {
   const [auditTrail, setAuditTrail] = useState()

   const fetchAudits = async () => {
    const res = await axios.get("http://localhost:3000/audit");
    setAuditTrail(res.data);
  };

   useEffect(() => {
    fetchAudits()
   },[])

  return (
    <div className="overflow-x-auto">
      <div>
      <h1 className="text-xl font-medium py-5">Audit Trails</h1>
    </div>
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Actor</th> 
        <th>Role</th> 
        <th>Description</th> 
        <th>Timestamp</th>
      </tr>
    </thead> 
    <tbody>
      {auditTrail?.map(trail => (
        <tr key={trail.id}>
        <th>{trail.recordId}</th> 
        <td>{trail.actor}</td> 
        <td><span className='font-medium badge badge-xs badge-accent text-white'>{trail.role}</span></td>
        <td>{trail.description}</td> 
        <td>{trail.createdAt}</td> 
      </tr>
      ))}
    </tbody>
    {auditTrail >= 5 &&
    <tfoot>
      <tr>
        <th></th> 
        <th>Actor</th> 
        <th>Role</th> 
        <th>Description</th> 
        <th>Timestamp</th> 
      </tr>
    </tfoot>
   }
  </table>
  {auditTrail <= 0 &&
  <div className="flex align-middle w-72 items-center mx-auto p-10">
      <img src={no_data} alt="No Audit Trails" />
    </div>
  }
</div>
  )
}

export default AuditTrail