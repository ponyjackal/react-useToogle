
const data = [
    {
        id: 1,
        title: "Making the checkbox",
        completed: false
    },
    {
        id: 2,
        title: "class component is poorly",
        completed: false
    },
    {
        id: 3,
        title: "so easy to create such a poorly",
        completed: false
    },
    {
        id: 4,
        title: "this component is really doing",
        completed: true
    },
    {
        id: 5,
        title: "Functional components can reduce coupling",
        completed: false
    },
    {
        id: 6,
        title: "our code without impacting another",
        completed: false
    },
    {
        id: 7,
        title: "Once again, the constraints put in place by functional",
        completed: false
    },
    {
        id: 8,
        title: "management library such as Redux",
        completed: true
    },
    {
        id: 9,
        title: "The general heuristic I use",
        completed: false
    }
];

const initState = {
    todos: data,
    searchTerm: '',
    index: 10
}

const todos = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.index + 1,
                        title: action.title,
                        completed: false
                    }
                ],
                index: state.index + 1
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                )
            }
        case 'SEARCH_TODO':
            return {
                ...state,
                searchTerm: action.text
            }
        default:
            return state;
    }
}

export default todos;