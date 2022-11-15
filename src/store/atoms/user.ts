import { atom } from 'jotai';

export const emailAtom = atom('');
export const nameAtom = atom('');
export const ageAtom = atom(0);

export const isLoginAtom = atom((get) => Boolean(get(emailAtom)));
