import React from "react";

export const TransferList = ({transfers}) => {
  return (
    <div className="flex justify-center">
      <table className='border-collapse  w-6/12 mt-12'>
        <tbody className="">
            {transfers.map((transfers)=>(
              <tr key={transfers.id+transfers.descripcion}>
                  <td className="p-3 border-4  border-gray-300">{transfers.descripcion}</td>
                  <td
                  className={transfers.monto>0?'text-succes p-3 border-4  border-gray-300':'text-danger p-3 border-4  border-gray-300'
                  }
                  >
                  {transfers.monto}
                  </td>
              </tr>
            ))}
        </tbody>
      </table>  
    </div>
    
  )
}