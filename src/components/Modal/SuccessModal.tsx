import { useNavigate } from 'react-router-dom';

import { useAtom, useAtomValue } from 'jotai';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Modal } from '@mui/material';

import { successModalAtom, successModalTextAtom } from '../../store/atoms/modal';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: 3,
};

export default function SuccessModal() {
  const [open, setOpen] = useAtom(successModalAtom);
  const text = useAtomValue(successModalTextAtom);
  const navigation = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigation('/example');
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <p className='flex justify-center items-center gap-2'>
            <CheckCircleIcon style={{ width: 32, height: 32, color: '#1acf44' }} />
            {text}
          </p>
        </Box>
      </Modal>
    </div>
  );
}
