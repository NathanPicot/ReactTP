import { useState } from 'react';
import ModalContent from './ModalContent.js';

export default function NoPortalExample({ onConfirm }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>
                X
            </button>
            {showModal && (
                <ModalContent
                    onClose={() => setShowModal(false)}
                    onConfirm={onConfirm}  // Passer la fonction onConfirm ici
                />
            )}
        </>
    );
}
