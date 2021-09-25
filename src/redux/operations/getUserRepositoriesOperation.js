import axios from "axios";
import getUserRepositoriesActions from '../actions/getUserRepositoriesActions';

axios.defaults.baseURL = 'https://api.github.com';

axios.defaults.headers.common.Accept = `application/vnd.github.v3+json`;

const getUserRepositoriesOperation = (userLogin) => async (dispatch) => {

    dispatch(getUserRepositoriesActions.getUserRepositoriesRequest());

    try {
        
        const response = await axios.get(`/users/${userLogin}/repos`);
        
        dispatch(getUserRepositoriesActions.getUserRepositoriesSuccess(response.data));
    } catch(error) {
        dispatch(getUserRepositoriesActions.getUserRepositoriesError(error.message));
    };
};

export default getUserRepositoriesOperation;