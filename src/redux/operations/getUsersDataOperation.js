import axios from "axios";
import getUsersDataActions from '../actions/getUsersDataActions';

axios.defaults.baseURL = 'https://api.github.com';

axios.defaults.headers.common.Accept = `application/vnd.github.v3+json`;

const getUsersDataOperation = () => async (dispatch) => {

    dispatch(getUsersDataActions.getUsersDataRequest());

    try {
        const response = await axios.get('/users');

        dispatch(getUsersDataActions.getUsersDataSuccess(response.data));
    } catch(error) {
        dispatch(getUsersDataActions.getUsersDataError(error.message));
    };
};

export default getUsersDataOperation;