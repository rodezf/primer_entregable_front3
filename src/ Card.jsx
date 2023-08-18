import PropTypes from 'prop-types';

const Card = ({ data }) => {
    return (
        <div className="card">
            <p>First Input: {data.firstInput}</p>
            <p>Second Input: {data.secondInput}</p>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.shape({
        firstInput: PropTypes.string.isRequired,
        secondInput: PropTypes.string.isRequired,
    }).isRequired
};

export default Card;
