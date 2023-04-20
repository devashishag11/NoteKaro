import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
    return ( <
        div className = 'header' >
        <
        h1 > NoteKaro < /h1 > <
        button onClick = {
            () =>
            handleToggleDarkMode(
                (previousDarkMode) => !previousDarkMode
            )
        }
        className = 'save' >
        Theme <
        /button>  < /
        div >
    );
};

export default Header;