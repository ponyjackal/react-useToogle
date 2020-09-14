## react-use-toggle

## Description

Simple Todo App to let you add and find your own tasks.
- Used custom react hooks for useDebounce and useToggle.
- Used React useRef to focus on input after add a new task
- Used React useCallback to optimize the todoList component
- Make TodoList component as a presentational component

## Installation

Here is codesandbox for this repo
https://codesandbox.io/s/pedantic-saha-tg69v

or git clone https://github.com/PonyJackal/react-useToogle

## Usage

- useToggle

      const useToggle = (initState = false) => {
        const [status, setStatus] = useState(initState);

        const toggle = useCallback(() => {
          setStatus((status) => {
            return !status;
          });
        }, []);

        return [status, toggle];
      };
      
 - useDebouce
 
         const useDebounce = (searchTerm, delay) => {
          const [debouncedValue, setDebouncedValue] = useState(searchTerm);

          useEffect(() => {
            const handler = setTimeout(() => {
              setDebouncedValue(searchTerm);
            }, delay);

            return () => {
              clearTimeout(handler);
            };
          }, [searchTerm, delay]);

          return debouncedValue;
        };
        
 ## Contribution
 
 Please feel free to submit any issues or pull requests.
 
 ## License
 
 MIT
