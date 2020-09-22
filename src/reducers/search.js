
const initState = {
    searchTerm: '',
    findCompleted: false
}

const search = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_TODO':
            return {
                ...state,
                searchTerm: action.text
            }
        case 'FIND_TOGGLE_TODO':
            return {
                ...state,
                findCompleted: action.toggle
            }
        default:
            return state;
    }
}

export default search;