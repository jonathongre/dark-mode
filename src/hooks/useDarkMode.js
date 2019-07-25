import React, { useEffect, useLayoutEffect } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = () => {

    const [storedValue, setStoredValue] = useLocalStorage('darkmode');
    
    useLayoutEffect(() => {
        const isDark = localStorage.getItem('darkmode') === 'true';
        isDark
            ? document.body.classList.add('dark-mode')
            : document.body.classList.remove('dark-mode');
    },[storedValue]);


    return [storedValue, setStoredValue];
}; 

export default useDarkMode;