import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const dataAtom = atomWithStorage('data', [])
export const notifMidtransAtomStorage = atomWithStorage('notification', [])
export const lastDonationNameAtom = atom(null)