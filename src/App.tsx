import React from "react";
import "./App.css";
import Example from "./components/Example";

import { useDispatch } from "react-redux";
import { actions } from "./redux/slice/counter";

function App() {
    const dispatch = useDispatch();
    return  <div className="App">
        <div>
            <button onClick={() => dispatch(actions.increment())}>Increment</button>
            <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
            <button onClick={() => dispatch(actions.incrementBy2(2))}>Increment by 2</button>
            <Example/>
        </div>
    </div>;
}

export default App;
