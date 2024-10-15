import { useState } from 'react';
import DeleteModalContent from './DeleteModalContent.js';

export default function NoPortalExample({ onConfirm }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="delete" onClick={() => setShowModal(true)}>
                X
            </button>
            {showModal && (
                <DeleteModalContent
                    onClose={() => setShowModal(false)}
                    onConfirm={onConfirm}  // Passer la fonction onConfirm ici
                />
            )}
        </>
    );
}
