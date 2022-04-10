import React from 'react'
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";

export default function
    () {
    const language = useSelector((state) => state.language);
    const name = useSelector((state) => state.name);
    const ticket = useSelector((state) => state.ticket);
    let today = new Date();
    let currentHour = today.getHours();
    const alert = useAlert();
    return (
        <div className='ms-2'>
            <div className='row'>
                <h1 style={{ color: "indigo" }}>Teams</h1>
                {language === "spanish" ? (
                    <div className="text-start ps-4" id="teamsText">
                        {currentHour < 12 ? "Buenos días" : "Buenas tardes"} {name},
                        <br />
                        <br />
                        Te contacto en relación a la{" "}
                        {ticket.charAt(0) === "I"
                            ? "incidencia "
                            : ticket.charAt(0) === "S"
                                ? "petición "
                                : ""}{" "}
                        {ticket}.
                        <br />
                        <br />
                        Puedes contactarnos en el +34 915 689 623.
                        <br />
                        <br />
                        Un saludo.
                    </div>
                ) : (
                    <div className="text-start px-4" id="teamsText">
                        {currentHour < 12 ? "Good morning" : "Good afternoon"} {name},
                        <br />
                        <br />
                        I'm reaching you in relation to the{" "}
                        {ticket.charAt(0) === "I"
                            ? "incident "
                            : ticket.charAt(0) === "S"
                                ? "request "
                                : ""}{" "}
                        {ticket}.
                        <br />
                        <br />
                        You can contact us at +34 915 689 623.
                        <br />
                        <br />
                        Regards.
                    </div>
                )}
            </div>
            <div className='row pt-3'>
                <div className="col-6 d-grid ms-2">
                    <div
                        className="btn btn-success"
                        onClick={() =>
                            navigator.clipboard.writeText(
                                document.getElementById("teamsText").innerText
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
