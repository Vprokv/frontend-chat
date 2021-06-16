import React, {useMemo} from "react";
import isToday from "date-fns/isToday";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import PropTypes from "prop-types";

const MessageTime = ({date}) => {
    if (isToday(new Date(date))) {
        return format(new Date(date), "HH:mm");
    } else {
        return format(new Date(date), "MM.dd.yyyy", {
            locale: ruLocale,
        });
    }

};


MessageTime.propTypes = {
    date: PropTypes.string
};

MessageTime.defaultProps = {
    date: ""
}
export default MessageTime;


