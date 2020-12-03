import React from 'react'
import { Form} from 'react-bootstrap'
const SortPanel = ({name}) => (<Form.Control as="select" size="lg">
        <option>Select</option>
        <option>Lowest to highest</option>
        <option>Highest to lowest</option>
    </Form.Control>
)

export default SortPanel