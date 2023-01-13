import React, {useState} from 'react'

const Expense = (props) => {
    const [deleted, setDeleted] = useState()

    return (
        <div className="box">
            <div className="text">
                <b>{props.name} - ${props.price}</b>
            </div>
            <div>
                <button>Delete</button>
            </div>

        </div>
    )
}

export default Expense