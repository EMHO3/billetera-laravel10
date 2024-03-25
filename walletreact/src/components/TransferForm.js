import React from "react";


export const TransferForm = ({form,onChange,onSubmit}) => {
  return (
    <form className="form-inline justify-content-center"
          onSubmit={onSubmit}>
        <div className="form-group mb-2">
            <input type="text" className="form-control"
            placeholder="Descripcion"
            name="descripcion"
            value={form?.descripcion}
            onChange={onChange}></input>
        </div>
        <div className="form-group mb-2">
            <input type="text" 
            placeholder="Valor"
            className="form-control"
            name="monto"
            value={form?.monto} 
            onChange={onChange}></input>
        </div>
        <button type="submit" 
        className="btn btn-primary mb-2">
            AGREGAR
        </button>
    </form>
  )
}