import axios from "axios";
import getUserDataActions from '../actions/getUserDataActions';

axios.defaults.baseURL = 'https://api.github.com';

axios.defaults.headers.common.Accept = `application/vnd.github.v3+json`;

const getUserDataOperation = (userLogin) => async (dispatch) => {

    dispatch(getUserDataActions.getUserDataRequest());

    try {
        
        const response = await axios.get(`/users/${userLogin}`);

        dispatch(getUserDataActions.getUserDataSuccess(response.data));
    } catch(error) {
        dispatch(getUserDataActions.getUserDataError(error.message));
    };
};

export default getUserDataOperation;