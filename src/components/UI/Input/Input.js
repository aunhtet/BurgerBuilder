import React from 'react';
import styleClass from './Input.css'


const input = (props) => {

    let inputElement = null;
    const inputClasses = [styleClass.InputElement];

    if (props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(styleClass.Invalid);
    }

    let validationError = null;
    if (props.invalid && props.touched){
        validationError = <p className={styleClass.ValidationError}>Please enter a valid {props.valueType}</p>;
    }

    switch(props.elementType){
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
            <select 
                className={inputClasses.join(' ')} 
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map((option)=>(
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            );
            break;
        default:
            inputElement = <input 
            className={inputClasses.join(' ')} 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>;
    }

    return (
        <div className={styleClass.Input}>
            <label className={styleClass.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
        );
}

export default input;