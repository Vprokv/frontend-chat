import {Api} from "../../utils/api";


const Actions = {
    setDialogs: items => ({
        type: "DIALOGS:SET_ITEMS",
        payload: items
    }),
    setCurrentDialogId: id => ({

        type: "DIALOGS:SET_CURRENT_DIALOG_ID",
        payload: id
    }),
    fetchDialogs: () => dispatch => {

        Api.getAll().then(({data}) => {
            dispatch(Actions.setDialogs(data));
        });

    }
};

export default Actions;