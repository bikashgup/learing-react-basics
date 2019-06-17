import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import HeaderClass from './components/header';
const App = () =>
{
    return (
        <div>
            <HeaderClass />
        </div>

    )
}


ReactDOM.render( <App />, document.querySelector( '#root' ) )