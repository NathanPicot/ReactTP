export default function ModalContent({ onClose, onConfirm }) {
    return (
        <div className="modal">
            <div>Etes-vous sûr de vouloir supprimer ???</div>
            <button onClick={() => {
                onConfirm();
                onClose();
            }}>Oui</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
}
