

import PropTypes from 'prop-types';

const Form = ({ onSubmit, onInputChange, values }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="First Input" value={values.firstInput} onChange={(e) => onInputChange('firstInput', e.target.value)} />
            <input type="text" placeholder="Second Input" value={values.secondInput} onChange={(e) => onInputChange('secondInput', e.target.value)} />
            <button type="submit">Send</button>
        </form>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    values: PropTypes.shape({
        firstInput: PropTypes.string.isRequired,
        secondInput: PropTypes.string.isRequired
    }).isRequired
};

export default Form;
