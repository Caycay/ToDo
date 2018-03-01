import PropTypes from 'prop-types';

const { shape, number, bool, string } = PropTypes;

export const lists = shape({
    id: PropTypes.oneOf[(number, string)],
    name: PropTypes.oneOf[(number, string)]
});