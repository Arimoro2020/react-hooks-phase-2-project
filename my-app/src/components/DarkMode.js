import {useState, useEffect} from "react";
import "./theme.css";

function DarkMode(){    

    const [isDarkMode, setIsDarkMode] = useState('true')
     
    const toggleDarkMode = () => {
     setIsDarkMode(!isDarkMode)
    } 

    useEffect(() =>{
       isDarkMode? document.body.className = 'dark': document.body.className = 'light'
    }, [isDarkMode]);


    return (
        <div className={isDarkMode? 'dark': 'light'} style={{display: 'flex', justifyContent: 'right'}}>
            <button onClick={toggleDarkMode} style={{background: 'grey'}}>
                {isDarkMode? 'lightMode' : 'darkMode'}
            </button>
        </div>

    )
    
}

export default DarkMode;