import { useAtom, useSetAtom } from 'jotai';

import { Box, Modal } from '@mui/material';

import { confirmModalAtom, confirmModalTextAtom, confirmStateAtom } from '../../store/atoms/modal';

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

export default function ConfirmModal() {
  const [open, setOpen] = useAtom(confirmModalAtom);
  const [text] = useAtom(confirmModalTextAtom);
  const setConfirmState = useSetAtom(confirmStateAtom);

  const handleClose = (confirmState = false) => {
    setOpen(false);
    setConfirmState(() => confirmState);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <p className='flex justify-center items-center w-full'>{text}</p>
          <div className='flex w-full items-center justify-center gap-3 mt-3'>
            <button
              type='button'
              className='bg-slate-700 p-2 px-4 rounded text-white'
              onClick={() => handleClose(true)}
            >
              확인
            </button>
            <button
              type='button'
              className='bg-slate-400 p-2 px-4 rounded text-white'
              onClick={() => handleClose(false)}
            >
              취소
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
