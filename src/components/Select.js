import React from 'react';

function Select({ onChange, items = [], category, namekey = 'name', valuekey = 'value', stateKey = 'min', defaultOption, selectedValue }) {
    return (
        <div>
            <select name={category} onChange={(e) => onChange(e, category, null, stateKey)} defaultValue={selectedValue} >
                {defaultOption && <option value="">{defaultOption}</option>}
                {items.map(i => <option key={i[valuekey]} value={i[valuekey]}>{i[namekey]}</option>)}
            </select>
        </div>
    )
}

export default React.memo(Select);
