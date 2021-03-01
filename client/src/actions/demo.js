import {getDemo, createDemo} from '../api';

export const getDemoAction = () => async(dispatch) => {
    const dataFetch = await getDemo();
    if(!dataFetch.error) {
        dispatch({
            type: 'FETCH_DEMO_SUCCESS',
            payload: dataFetch.data
        })
    }
    else {
        dispatch({
            type: 'FETCH_DEMO_FAILED'
        })
    }
}

export const createDemoAction = (postData) => async(dispatch) => {
    const dataFetch = await createDemo(postData);
    if(!dataFetch.error) {
        dispatch({
            type: 'CREATE_DEMO_SUCCESS',
            payload: dataFetch.data
        })
    }
    else {
        dispatch({
            type: 'CREATE_DEMO_FAILED'
        })
    }
}