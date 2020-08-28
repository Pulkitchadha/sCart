import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'components/Checkbox';
import Select from 'components/Select';

const initalState = {
    color: [],
    brand: [],
    price: { min: null, max: null },
    discount: { min: null, max: null },
}

class FilterMenu extends React.Component {
    state = { ...initalState }

    discount = [
        { name: '5 %', value: 5 }, { name: '10 %', value: 10 }, { name: '15 %', value: 15 }, { name: '20 %', value: 20 }, { name: '25 %', value: 25 },
        { name: '30 %', value: 30 }, { name: '35 %', value: 35 }, { name: '40 %', value: 40 }, { name: '45 %', value: 45 }, { name: '50 %', value: 50 },
        { name: '55 %', value: 55 }, { name: '60 %', value: 60 }, { name: '65 %', value: 65 }, { name: '70 %', value: 70 }, { name: '75 %', value: 75 },
        { name: '80 %', value: 80 }, { name: '85 %', value: 85 }, { name: '90 %', value: 90 }, { name: '95 %', value: 95 }, { name: '100 %', value: 100 },
    ]

    handleChange = (e, category, name, stateKey) => {
        let tagName = '';
        let isChecked = false;
        const value = e?.target?.value;

        if (name) {
            tagName = name.toLowerCase();
            isChecked = !!!(this.state[category] && this.state[category].includes(name))
        } else {
            tagName = e.target.name.toLowerCase();
            isChecked = e.target.checked;
        }
        this.setState(prevState => {
            if (['price', 'discount'].includes(category)) {
                return {
                    [category]: { ...prevState[category], ...{ [stateKey]: !isNaN(value) ? parseInt(value) : null } }
                }
            } else if (isChecked) {
                return {
                    [category]: [...prevState[category] || [], tagName]
                };
            } else {
                return {
                    [category]: prevState[category].filter(n => n !== tagName)
                };
            }
        }, () => this.props.applyFilter(this.state));
    }

    clearAllFilter = () => {
        this.setState({ ...initalState }, () =>
            this.props.applyFilter({
                ...initalState,
                price: { ...initalState.price },
                discount: { ...initalState.discount }
            }))
    }

    getFilter = (type = 'COLOUR') => {
        return this.props.filters.find(f => f.type === type)?.values;
    }

    render() {
        return (
            <div className="col-sm-2 sidenav">
                <div>
                    <div >
                        <div >
                            <span className="text-center h4">Filters</span>
                            <div className="pull-right cursor-pointer" onClick={this.clearAllFilter}>
                                <span className="glyphicon glyphicon-repeat"></span>{" "}
                                Reset filter
                            </div>
                        </div>
                        <hr />
                        <div >
                            <div >
                                <div className="sub_title">Colour</div>
                                <div className="row divWithScroll">
                                    {this.getFilter('COLOUR')?.map(f =>
                                        <div className="col-sm-6" key={`${f.color}-${f.title}`}>
                                            <Checkbox
                                                onChange={this.handleChange}
                                                name={f.title}
                                                category='color'
                                                isChecked={this.state.color?.includes(f.title?.toLowerCase()) || false}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="mb-2 sub_title">Brand</div>
                                <div className="row divWithScroll">
                                    {this.getFilter('BRAND')?.map(f =>
                                        <div className="col-sm-6" key={`${f.value}-${f.title}`}>
                                            <Checkbox
                                                onChange={this.handleChange}
                                                name={f.title}
                                                category='brand'
                                                isChecked={this.state.brand?.includes(f.title?.toLowerCase()) || false}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="sub_title">Price</div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Select
                                            items={this.getFilter('PRICE')}
                                            onChange={this.handleChange}
                                            category='price'
                                            namekey="displayValue"
                                            valuekey="key"
                                            stateKey="min"
                                            selectedValue={this.state.price?.min}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <Select
                                            items={this.getFilter('PRICE')}
                                            onChange={this.handleChange}
                                            category='price'
                                            namekey="displayValue"
                                            valuekey="key"
                                            stateKey="max"
                                            selectedValue={this.state.price?.max}
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className={"sub_title"}>Discount</div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Select
                                            items={this.discount}
                                            onChange={this.handleChange}
                                            category='discount'
                                            defaultOption="Min"
                                            stateKey="min"
                                            selectedValue={this.state.discount?.min}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <Select
                                            items={this.discount}
                                            onChange={this.handleChange}
                                            category='discount'
                                            defaultOption="Max"
                                            stateKey="max"
                                            selectedValue={this.state.discount?.max}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div >
        )
    }

}

FilterMenu.propTypes = {
    filters: PropTypes.array,
}

FilterMenu.defaultTypes = {
    filters: [],
}

export default FilterMenu;

