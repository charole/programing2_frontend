import { atom } from 'jotai';

export const successModalAtom = atom(false);
export const failedModalAtom = atom(false);

export const successModalTextAtom = atom('축하해요! 정답을 맞추셨어요!');
export const failedModalTextAtom = atom('땡! 다시 풀어보세요!');
