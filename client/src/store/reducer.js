import {FETCH_SHORT_LINK, FETCH_SHORT_LINK_ERROR, FETCH_SHORT_LINK_REQUEST, FETCH_SHORT_LINK_SUCCESS} from "./actions";

const initialState = {
    links: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHORT_LINK:
            return {...state, links: action.links};
        case FETCH_SHORT_LINK_REQUEST:
            return {...state, loading: true};
        case FETCH_SHORT_LINK_SUCCESS:
            return {...state, links: action.links || {}, loading: false};
        case FETCH_SHORT_LINK_ERROR:
            return {...state, loading: false};
        default:
            return state;
    }
};

export default reducer;