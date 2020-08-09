import React from 'react';

export default function Select({ onChange, items, category, namekey = 'name', valuekey = 'value', defaultOption, selectedValue }) {
    return (
        <div>
            <select name={category} onChange={(e) => onChange(e, category)} >
                {defaultOption && <option value="">{defaultOption}</option>}
                {items.map(i => <option key={i[valuekey]} value={i[valuekey]} selected={selectedValue === i[valuekey]}>{i[namekey]}</option>)}
            </select>
        </div>
    )
}
