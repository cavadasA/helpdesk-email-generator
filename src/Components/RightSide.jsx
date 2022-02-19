import React from 'react'
import { useSelector } from "react-redux";
import { zoomEN, zoomES, blackboardEN, blackboardES, remoteConnectionEN, remoteConnectionES } from './instrucciones';

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}

export default function RightSide() {
    const language = useSelector((state) => state.language)
    const mailNumber = useSelector((state) => state.mailNumber)
    const name = useSelector((state) => state.name)
    const date = formatDate(new Date(useSelector((state) => state.date)))
    const ticket = useSelector((state) => state.ticket)
    const instruction = useSelector((state) => state.instruction)

    return (
        <div className='row px-4'>
            <div className='col-12 border'>
                {language === "spanish" ? <div className='text-start' id='test'>
                    Estimado {name},
                    <br />
                    {instruction === "nada" || instruction === "" ? <br /> :
                        instruction === "blackboard" ? blackboardES :
                            instruction === "zoom" ? zoomES :
                                instruction === "remoto" ? remoteConnectionES : ""
                    }
                    {mailNumber === 1 || mailNumber === 2 ? "Tras la apertura de su " + (ticket.charAt(0) === "I" ? "incidencia " : ticket.charAt(0) === "S" ? "petición " : "") + ticket + " el día " + date + ", le solicitamos que, por favor, contacte con nosotros lo antes posible a través del teléfono +34 91 568 96 23, o bien, que nos facilite un número de contacto y una franja horaria en la que podamos llamarle para poder continuar con la resolución de su " + (ticket.charAt(0) === "I" ? "incidencia." : ticket.charAt(0) === "S" ? "petición." : "") : "Le contactamos en relación a su " + (ticket.charAt(0) === "I" ? "incidencia " : ticket.charAt(0) === "S" ? "petición " : "") + ticket + ". Tras haber intentado contactar con usted y no haber recibido respuesta por su parte, le informamos que procedemos al cierre de su ticket."}
                    <br />
                    <br />
                    {mailNumber === 1 || mailNumber === 2 ? "En caso de no recibir respuesta por su parte, le informamos que su " + (ticket.charAt(0) === "I" ? "incidencia " : ticket.charAt(0) === "S" ? "petición " : "") + "será cerrada al cabo de " + (mailNumber === 1 ? + "5" : "3 ") + " días hábiles." : " Sin embargo, " + (ticket.charAt(0) === "I" ? "si su problema persiste" : ticket.charAt(0) === "S" ? "si desea continuar con su petición" : "") + ", por favor, no dude en contactar con nosotros en el número de teléfono +34 91 568 96 23."}
                    <br />
                    <br />
                    Le recordamos que estamos disponibles las 24 horas del día los 7 días de la semana.
                    <br />
                    <br />
                    Atentamente,
                    <br />
                    IT Support.
                </div> :
                    <div className='text-start' id='test'>
                        Dear {name},
                        <br />
                        {instruction === "nada" || instruction === "" ? <br /> :
                            instruction === "blackboard" ? blackboardEN :
                                instruction === "zoom" ? zoomEN :
                                    instruction === "remoto" ? remoteConnectionEN : ""
                        }
                        {mailNumber === 1 || mailNumber === 2 ? "After the opening of your " + (ticket.charAt(0) === "I" ? "incident " : ticket.charAt(0) === "S" ? "request " : "") + ticket + " the day " + date + ", we cordially request for you to contact us as soon as possible through the phone number +34 91 568 96 23 or you could facilitate a contact number and timeframe in which we could give you a call to continue with the resolution of the " + (ticket.charAt(0) === "I" ? "incident." : ticket.charAt(0) === "S" ? "request." : "") : "We contact you in relation with your " + (ticket.charAt(0) === "I" ? "incident " : ticket.charAt(0) === "S" ? "request " : "") + ticket + ". After trying to reach you and not receiving any answer on your behalf, we inform you that we will proceed with the closure of your ticket."}
                        <br />
                        <br />
                        {mailNumber === 1 || mailNumber === 2 ? "In case of not receiving a response from your end, we inform you that your " + (ticket.charAt(0) === "I" ? "incident " : ticket.charAt(0) === "S" ? "request " : "") + "will be closed in " + (mailNumber === 1 ? + "5" : "3 ") + "  business days." : "Nevertheless, " + (ticket.charAt(0) === "I" ? "if your problem persists" : ticket.charAt(0) === "S" ? "if you wish to continue with your request" : "") + ", please, don’t hesitate to contact us through the number +34 91 568 96 23."}
                        <br />
                        <br />
                        We remind you that we are available 24 hours a day and 7 days a week.
                        <br />
                        <br />
                        Regards,
                        <br />
                        IT Support.
                    </div>
                }
            </div>
        </div>
    )

}
