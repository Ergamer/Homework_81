import axios from '../axios-links';


export const FETCH_SHORT_LINK = 'FETCH_SHORT_LINK';
export const FETCH_SHORT_LINK_REQUEST = 'FETCH_SHORT_LINK_REQUEST';
export const FETCH_SHORT_LINK_SUCCESS = 'FETCH_SHORT_LINK_SUCCESS';
export const FETCH_SHORT_LINK_ERROR = 'FETCH_SHORT_LINK_ERROR';




export const fetchShortLinkRequest = () => {
    return {type: FETCH_SHORT_LINK_REQUEST};
};

export const fetchShortLinkSuccess = (links) => {
    return {type: FETCH_SHORT_LINK_SUCCESS, links}
};

export const fetchShortLinkError = () => {
    return {type: FETCH_SHORT_LINK_ERROR}
};


export const fetchShortLink = (data) => {
    return dispatch => {
        dispatch(fetchShortLinkRequest());
        axios.post('/links', data).then(result => {
            console.log(result);
            dispatch(fetchShortLinkSuccess(result.data.shortUrl));
        }, error => {
            dispatch(fetchShortLinkError());
        });
    }
};