import React, { Component } from 'react';
import '../css/styles.css'


class HeaderClass extends Component
{
    state = {

        keywords: ''
    }

    inputChangeHandler = ( event ) =>
    {

        this.setState( {

            keywords: event.target.value
        } )
    }
    render ()
    {



        return (
            <header >
                <div
                    className="logo"
                    onClick={ () => console.log( "I was clicked" ) }
                >Logo</div>
                <input
                    type="text"
                    onChange={ this.inputChangeHandler } />

            </header>
        )
    }
}

export default HeaderClass;