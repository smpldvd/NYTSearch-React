import React from 'react'
const Result = props => {
    const style ={border: `1px solid`}
    return (


        <div className=" text-left card" style={style} id={props.id}>
            <div className="text-left card-body">
                <h5 className="text-left card-title">{props.title}</h5>
                <h6 className="text-left card-subtitle mb-2 text-muted">{props.date}</h6>
                <p className="text-left card-text">{props.snippet}</p>
                <a href={props.url} className="text-left card-link">For more info</a>
            </div>
            <button onClick={() => props.handleSave(props.id)}>Crispy Save?</button>
        </div>
    )
}

export default Result;