import { useNavigate } from 'react-router-dom';

import { useAtom } from 'jotai';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Modal } from '@mui/material';

import { successModalAtom } from '../../store/atoms/modal';

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
            축하해요! 정답을 맞추셨어요!
          </p>
        </Box>
      </Modal>
    </div>
  );
}
