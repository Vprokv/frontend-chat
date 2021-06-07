export default (key, touched, errors) => {
    if (touched[key]) {
        if (errors[key]) {
            return "errors";
        } else {
            return "success";
        }
    } else {
        return "";
    }
};