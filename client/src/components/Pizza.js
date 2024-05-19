import React, { useState } from 'react'
import modal from 'react-bootstrap'

export default function Pizza({ pizza }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvariant] = useState('small')

    return (
        <div style={{ margin: '70px', padding: '100px' }} className='shadow p-3 mb-5 bg-white rounded'>
            <h1>{Pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />

            <div className="flex-container">

                <div className="m-1 w-100">
                    <p>Varients</p>
                    <select value={varient} onChange={(e) => { setvariant(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>

                <div className="m-1 w-100">
                    <p>Quantity</p>
                    <select>
                        {[...Array(10).keys()].map((x, i) => {

                            return <option value={i + 1}>{i + 1}</option>

                        })}
                    </select>
                </div>

            </div>

            <div className="flex-container">

                <div>
                    <h1>Price : {pizza.prices[0][varient] * quantity}</h1>
                </div>

                <div className='m-1 w-100'>
                    <button className='btn'>Add to cart</button>
                </div>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}