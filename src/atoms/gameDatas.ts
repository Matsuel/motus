import { atom } from 'jotai';

export const currentWordAtom = atom<string>("");
export const wordTestAtom = atom<string[]>([]);
export const attemptsRemainingAtom = atom<number>(6);