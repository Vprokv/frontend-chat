import React, {Fragment, useMemo} from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ru from 'date-fns/locale/ru'

const Time = ({date})=> useMemo(()=> formatDistanceToNow(new Date (date), {addSuffix: true, locale: ru}),[date])


Time.propTypes = {
    date: PropTypes.string
};

export default Time;