import React, { memo } from 'react';
import "./Input.scss";

const Input = (props) => {
    let inputElement = null;
    const inputClasses = "InputElement";

    switch(props.elementType) {
        case('input'):
            inputElement = <input 
                className={inputClasses}
                 {...props.elementConfig}
                  value={props.value} 
                  onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea 
                className={inputClasses}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case('select'):
            inputElement = (
                <select 
                    className={inputClasses}
                    value={props.value} 
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = 
                <input className={inputClasses}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>;
    }

    return(
        <div className="Input">
             {inputElement}
        </div>
    );
};

export default memo(Input);