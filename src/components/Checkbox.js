import React from 'react';

export default function Checkbox({ onChange, name, category, isChecked }) {
    return (
        <div>
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
        </div>
    )
}
