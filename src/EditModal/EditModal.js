import { useState } from 'react';
import EditModalContent from './EditModalContent.js';

export default function NoPortalExample({ onConfirm,  value, newValue, setNewValue }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>
                Edit
            </button>
            {showModal && (
                <EditModalContent
                    onClose={() => setShowModal(false)}
                    onConfirm={onConfirm}
                    value={value}
                    setNewValue={setNewValue}
                    newValue={newValue}
                />
            )}
        </>
    );
}
