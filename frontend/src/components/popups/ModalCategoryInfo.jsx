import './popup.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function ModalCategoryInfo ({
  isOpened = false,
  onClose = () => {},
  ariaLabelledBy = 'default modal title',
  ariaDescribedBy = 'No description',
  children
}) {

  return (
    <>
      <Modal
        open={isOpened}
        onClose={onClose}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      >      
        <Box className='modal'>
          {children}
        </Box>
      </Modal>
    </>);
}

export default ModalCategoryInfo;