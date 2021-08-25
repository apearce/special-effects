import { useEffect } from 'react';
import { NOOP } from './utils';

export default function useConditionalEffect(effect, bool) {
    useEffect(bool ? effect : NOOP);
};