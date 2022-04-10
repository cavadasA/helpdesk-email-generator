import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";

export default function ProcesoDeContacto() {
    const [telefono, setTelefono] = useState(false)
    const [teams, setTeams] = useState(false)
    const [mail, setMail] = useState(false)
    const mailNumber = useSelector((state) => state.mailNumber)
    const alert = useAlert();

    function handleChange(proceso) {
        switch (proceso) {
            case "telefono":
                return setTelefono(!telefono);
            case "teams":
                return setTeams(!teams)
            case "mail":
                return setMail(!mail)
        }
    }

    return (
        <div className='row ms-3'>
            <h1 className='pb-2' style={{color: "gold"}}>Proceso de Contacto</h1>
            <div className='col-6'>
                <form>
                    <div className="d-flex justify-content-start form-check">
                        <input className="form-check-input" type="checkbox" value="telefono" checked={telefono} id="telefono" onChange={(event) => handleChange(event.target.value)} />
                        <label className="form-check-label text-start ms-2" htmlFor="telefono">
                            Teléfono
                        </label>
                    </div>
                    <div className="d-flex justify-content-start form-check">
                        <input className="form-check-input" type="checkbox" value="teams" checked={teams} id="teams" onChange={(event) => handleChange(event.target.value)} />
                        <label className="form-check-label text-start ms-2" htmlFor="teams">
                            Teams
                        </label>
                    </div>
                    <div className="d-flex justify-content-start form-check">
                        <input className="form-check-input" type="checkbox" value="mail" checked={mail} id="mail" onChange={(event) => handleChange(event.target.value)} />
                        <label className="form-check-label text-start ms-2" htmlFor="mail">
                            Mail
                        </label>
                    </div>
                </form>
            </div>
            <div className='col-6 border'>
                <div id="procesoText">
                    {telefono ? (<div>Llamo por teléfono, sin éxito</div>) : ""}
                    {teams ? (<div>Llamo por Teams, sin éxito.<br />Escribo por Teams.</div>) : ""}
                    {mail ? mailNumber === 1 ? "Mando 1º mail." : mailNumber === 2 ? "Mando 2º mail." : mailNumber === 3 ? "Mando mail de cierre" : "" : ""}
                </div>
            </div>
            <div className='row pt-3'>
                <div className="col-12 d-grid gap-2">
                    <div
                        className="btn btn-success"
                        onClick={() =>
                            navigator.clipboard.writeText(
                                document.getElementById("procesoText").innerText
                            )(alert.show("copiado"))
                        }
                    >
                        Copiar
                    </div>
                </div>
            </div>
        </div>
    )
}
