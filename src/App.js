import React, { useEffect} from 'react';
    import { useDispatch } from 'react-redux';
    import './App.css';

    function App() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type: 'hello'});
        dispatch({type: 'GOLDMINE'});
    }, [])


    return (
        <div className="App">
            hi there
        </div>
    );
    }

    export default App;