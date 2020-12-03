import React from 'react'
import { Form} from 'react-bootstrap'
import PropTypes from 'prop-types';


const FilterPanel = ({sizes, selected, onChange}) => (<div>
    <h5>Sizes:</h5>
    {sizes.map((item, key) => (<Form.Check type='checkbox' key={key} label={item} checked={selected.includes(item)} onChange={() => onChange(item, !selected.includes(item))}></Form.Check>))}
</div>)

FilterPanel.propTypes  = {
    sizes: PropTypes.array.isRequired
}

export default FilterPanel