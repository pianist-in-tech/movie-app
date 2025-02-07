import React from 'react';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

//display information about the movies
const Card = ({movie}) => {
    return (
        <div>
            <h2>
                {`#${-movie.ranking} - ${movie.title} (${movie.year})`}
            </h2>
            <img src={movie.img.src} alt={-movie.img.alt} width='200' />
            <p>{`Distributor: ${movie.distributor}`}</p>
            <p>{`Amount: ${movie.amount}`}</p>
        </div>
    );
} ;
//add validation for props
Card.propTypes={
    movie: PropTypes.shape({
        title: PropTypes.string,
        distributor: PropTypes.string,
        year: PropTypes.number,
        amount: PropTypes.string,
        img: PropTypes.shape({
            src:PropTypes.string,
            alt: PropTypes.string
        }),
        ranking: PropTypes.number
    }).isRequired
};

export default Card;