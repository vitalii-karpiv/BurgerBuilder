import React from 'react';

import classes from './Input.module.css';

const Input = props => {
    let inputElement = null;

    let attachedClasses = [classes.inputElement]

    if(!props.isValid && props.isTouched) {
        attachedClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case ('input') :
            inputElement = <input 
                                className={attachedClasses.join(' ')}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed} />;
            break;
        case ('textarea') :
            inputElement = <textarea 
                                className={classes.inputElement}
                                {...props.config}
                                value={props.value} 
                                onChange={props.changed}/>;
            break;
        case ('select') :
            inputElement = (<select 
                                className={classes.inputElement}
                                value={props.value}
                                onChange={props.changed}>
                                {props.config.map(elem => (
                                    <option 
                                        key={elem.value}
                                        value={elem.value}> 
                                        {elem.displayValue} 
                                    </option>
                                ))}
                            </select>)
            break;
        default :
            inputElement = <input 
                                className={classes.inputElement}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed} />;
            break;
    }

    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;