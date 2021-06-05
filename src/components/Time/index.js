import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ru from 'date-fns/locale/ru'

const Time = ({date})=>(
        <>
            {formatDistanceToNow(date, {addSuffix: true, locale: ru})}
        </>
    );



Time.propTypes = {
    date: PropTypes.string
};

export default Time;