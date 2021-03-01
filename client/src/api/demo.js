import fetch from 'node-fetch';
import {optionGet, optionPost} from './headerOption';

export const getDemo = async() => {
    try {
        const res = await fetch('/api/v1/demos', optionGet());
        const dataFetch = await res.json();
        console.log(res);
        return dataFetch;
    }
    catch (error) {
        return {
            error: error.message
        }
    }
}

export const createDemo = async (dataPost) => {
    try {
        const res = await fetch('/api/v1/demos', optionPost(dataPost));
        const dataFetch = await res.json();
        return dataFetch;
    }
    catch(error) {
        return {
            error: error.message
        }
    }
}