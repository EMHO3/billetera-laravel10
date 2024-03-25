import React from "react";


export const TransferForm = ({form,onChange,onSubmit}) => {
  return (
    <form className="form-inline justify-content-center"
          onSubmit={onSubmit}>
        <div className="form-group mb-2">
            <input type="text" 
            className="border-2 border-solid	pl-2 h-10 w-3/12 mt-6	 border-sky-500 rounded-md "
            placeholder="Descripcion"
            name="descripcion"
            value={form?.descripcion}
            onChange={onChange}></input>
        </div>
        <div className="form-group mb-2">
            <input type="text" 
            placeholder="Valor"
            className="border-2 border-solid	pl-2 h-10 w-3/12 mt-6	 border-sky-500 rounded-md "
            name="monto"
            value={form?.monto} 
            onChange={onChange}></input>
        </div>
        <button type="submit" 
        className="border-2 border-solid	h-10 w-2/12 mt-6	bg-cyan-400	 border-sky-500 rounded-md">
            AGREGAR
        </button>
    </form>
  )
}