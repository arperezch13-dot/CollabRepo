import React from 'react'
import './Notification.css'

interface NotificationProps {
    message:string;
    type: 'success' | 'alert' | 'error';
}

const Notification = (props: NotificationProps) => {


    const styles = {
        success: 'bg-green-100 border-green-500 text-green-700',
        alert: 'bg-yellow-100 border-yellow-500 text-yellow-700',
        error: 'bg-red-100 border-red-500 text-red-700'
    }
  return (

    <div>Notification</div>
  )
}

export default Notification