import React, { Component } from 'react';
import '../css/styles.css'


class HeaderClass extends Component
{
    inputChangeHandler ( event )
    {
        console.log( event.target.value )
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
                    onChange={ ( e ) => this.inputChangeHandler( e ) } />
            </header>
        )
    }
}

export default HeaderClass;