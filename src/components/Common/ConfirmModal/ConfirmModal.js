import confirmModalStyles from './confirmModalStyles.js';

function ConfirmModal({ show, onDelete, onCancel }) {
  return (
    <div
      className={`${confirmModalStyles.main} ${show ? '' : 'hidden'}`}
      id='modal-id'
    >
      <div className={confirmModalStyles.position}></div>
      <div className={confirmModalStyles.box}>
        <div className=''>
          <div className={confirmModalStyles.infoBox}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={confirmModalStyles.deleteIcon}
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
            <h3 className={confirmModalStyles.heading}>Are you sure?</h3>
            <p className={confirmModalStyles.text}>
              Do you really want to delete the post? This process cannot be
              undone
            </p>
          </div>
          <div className={confirmModalStyles.buttonsContainer}>
            <button
              className={confirmModalStyles.cancelButton}
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className={confirmModalStyles.deleteButton}
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
