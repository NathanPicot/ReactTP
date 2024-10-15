import './DeleteModalContent.css';

export default function ModalContent({ onClose, onConfirm }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Confirmation</h2>
                <p>Êtes-vous sûr de vouloir supprimer cet objectif ?</p>
                <button onClick={() => {
                    onConfirm();
                    onClose();
                }}>Oui</button>
                <button className='delete' onClick={onClose}>Annuler</button>
            </div>
        </div>
    );
}
