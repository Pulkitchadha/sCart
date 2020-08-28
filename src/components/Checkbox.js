import React from 'react';
import { truncateString } from 'services/utility'

function Checkbox({ onChange, name, category, isChecked }) {
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
                {truncateString(name, 8)}
            </label>
        </>
    )
}

export default React.memo(Checkbox);
