const initialState = [];

const queries = (state = initialState, {type, content}) => {
    switch (type) {
        case 'MAKE_SEARCH' :
        return (
          content
        )
        default:
        return state;
    }
}

export default queries;