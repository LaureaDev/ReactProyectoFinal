
import { useState, createContext, useContext } from 'react';



const Notification = ({ message, severity}) => {
    const showNotification = {
        position: 'absolute',
        top: '150px',
        right: '5px',
        zIndex: '10',
        width: 'auto',
        height: 'auto',
        backgroundColor: severity === 'success' ? '#f44336' : '#4CAF50',
        color: '#fff',
        padding: '10px 20px 10px 20px',
        borderRadius: '5px',
        textAlign: 'center',
        fontSize: '16px',
        opacity: '1',
        transition: 'opacity 0.5s',
        display: 'flex',
        justifyContent: 'center',
    }
    

    if (message === ''){
        return 
    }

    

    return (
        <div style={showNotification}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const notify = ( severity, message ) => {
        setSeverity(message)
        setMessage(severity)

        setTimeout(() => {
            setMessage('')
        }, 3000)
}
    return(
        <NotificationContext.Provider value={{ notify }}>
        <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = () => {
    return useContext(NotificationContext)
    }