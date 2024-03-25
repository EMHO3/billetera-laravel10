import React from "react";

export const TransferList = ({transfers}) => {
  return (
    <table className='table'>
        <tbody>
            {transfers.map((transfers)=>(
            <tr key={transfers.id}>
                <td>{transfers.descipcion}</td>
                <td
                className={transfers.monto>0?'text-succes':'text-danger'}
                >
                    {transfers.monto}
                </td>
            </tr>
            ))}
        </tbody>
    </table>  
  )
}