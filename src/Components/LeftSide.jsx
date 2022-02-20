import React from 'react'
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useStore } from "react-redux";
import { changeDate, changeInstruction, changeLanguage, changeMailNumber, changeName, changeTicket, resetValues } from '../store/actions'
import { useAlert } from "react-alert";


export default function LeftSide() {
    const store = useStore();
    const alert = useAlert();

    return (
        <div className='container'>
            <div className='top-row row justify-content-end py-2'>
                <div className='col-6 d-grid gap-2'>
                    <Button type='button' className='btn btn-primary' onClick={() => store.dispatch(changeLanguage("english"))}>Ingles</Button>
                </div>
                <div className='col-6 d-grid gap-2'>
                    <Button type='button' className='btn btn-primary' onClick={() => store.dispatch(changeLanguage("spanish"))}>Español</Button>
                </div>
            </div>
            <div className='input-row row justify-content-end py-2'>
                <div className='col-4 d-grid gap-2'>
                    <input type="text" className="form-control" id="ticket" placeholder="Nº Ticket" onChange={(event) => store.dispatch(changeTicket(event.target.value.toUpperCase()))} />
                </div>
                <div className='col-4 d-grid gap-2'>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" onChange={(event) => store.dispatch(changeName(event.target.value))} />
                </div>
                <div className='col-4 d-grid gap-2'>
                    <input type="date" className="form-control" id="nombre" onChange={(event) => store.dispatch(changeDate(event.target.value))} />
                </div>
            </div>
            <div className='mail-row row justify-content-end py-2'>
                <div className='col-3 d-grid gap-2'>
                    <Button type='button' className='btn btn-primary' onClick={() => store.dispatch(changeMailNumber(1))}>1º email</Button>
                </div>
                <div className='col-3 d-grid gap-2'>
                    <Button type='button' className='btn btn-primary' onClick={() => store.dispatch(changeMailNumber(2))}>2º email</Button>
                </div>
                <div className='col-3 d-grid gap-2'>
                    <Button type='button' className='btn btn-primary' onClick={() => store.dispatch(changeMailNumber(3))}>Mail de cierre</Button>
                </div>
                <div className='col-3 d-grid gap-2'>
                    <Button type='button' className='btn btn-primary' onClick={() => store.dispatch(changeMailNumber(4))}>Resolución</Button>
                </div>
            </div>
            <div className='input-row row py-2'>
                <div className='col-12 d-grid gap-1'>
                    <DropdownButton id="dropdown-basic-button" title="Instrucciones" drop='down'>
                        <Dropdown.Item as="button" onClick={() => store.dispatch(changeInstruction("nada"))}>Nada</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => store.dispatch(changeInstruction("blackboard"))}>Blackboard</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => store.dispatch(changeInstruction("zoom"))}>Zoom</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => store.dispatch(changeInstruction("remoto"))}>Conectar en remoto</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-grid gap-2">
                    <div
                        className="btn btn-success"
                        onClick={() =>
                            navigator.clipboard.writeText(
                                document.getElementById("test").innerText
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
