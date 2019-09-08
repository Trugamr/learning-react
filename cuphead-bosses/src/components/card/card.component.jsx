import React from 'react'
import './card.styles.scss'

export const Card = ( { boss } ) => {
    return (
        <div className="card-container">
            <div 
                className="card-img" 
                style={{ backgroundImage: `url('/images/${boss.imgName}')`}}
            ></div>
            <h1 className="card-title">{ boss.name }</h1>
        </div>
    )
}