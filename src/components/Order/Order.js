import React from 'react';
import styleClass from './Order.css';

const order = (props) => {

    const ing =[];
    for (let ingName in props.ingredients){
        ing.push(
            {
                name: ingName,
                amount: props.ingredients[ingName]
            }
        );
    }
    const ingredientOutput = ing.map((ig)=> {
        return <span 
            style={{textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'}}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });
    return (
        <div className={styleClass.Order}>
            <p> Ingredients: {ingredientOutput}</p>
            <p> Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>

    );
}



export default order;