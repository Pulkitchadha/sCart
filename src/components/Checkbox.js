import React from 'react';

function Checkbox({ onChange, name, category, isChecked }) {
    console.log('checkbox rendered')
    return (
        <>
            <input
                type="checkbox"
                id={name}
                name={name}
                onChange={(e) => onChange(e, category)}
                checked={isChecked}
            />
            <label htmlFor={name}>
                {name}
            </label>
        </>
    )
}

export default  React.memo(Checkbox);
