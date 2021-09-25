import resetActions from '../actions/resetActions';

const resetUserAndRepositoriesDataOperation = () => async (dispatch) => {

    dispatch(resetActions.resetRequest());

    try {
        
        dispatch(resetActions.resetSuccess([]));

    } catch(error) {
        dispatch(resetActions.resetError(error.message));
    };
};

export default resetUserAndRepositoriesDataOperation;