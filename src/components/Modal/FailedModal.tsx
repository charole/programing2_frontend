import { useAtom, useAtomValue } from 'jotai';

import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Modal } from '@mui/material';

import { failedModalAtom, failedModalTextAtom } from '../../store/atoms/modal';

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

export default function FailedModal() {
  const [open, setOpen] = useAtom(failedModalAtom);
  const text = useAtomValue(failedModalTextAtom);

  const handleClose = () => {
    setOpen(false);
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
            <CancelIcon style={{ width: 32, height: 32, color: 'red' }} />
            {text}
          </p>
        </Box>
      </Modal>
    </div>
  );
}
