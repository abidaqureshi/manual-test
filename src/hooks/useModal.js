// useModal hook
import React, { useState } from 'react';

export function useModal() {
    const [visible, setVisible] = useState(false);
    const handleOk = () => {
        setVisible(false); 
    };
    const handleCancel = () => { setVisible(false); };
    const showModal = () => {
        setVisible(true);
    }

    return { visible, handleOk, handleCancel, showModal };
}