
export const addTodo = text => ({
    type: 'ADD_TODO',
    title: text
})

export const searchTodo = text => ({
    type: 'SEARCH_TODO',
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const findToggle = (toggle) => ({
    type: 'FIND_TOGGLE_TODO',
    toggle
})