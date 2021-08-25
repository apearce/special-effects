import { useLayoutEffect } from 'react';
import { NOOP } from './utils';

export default function useLayoutConditionalEffect(effect, bool) {
    useLayoutEffect(bool ? effect : NOOP);
};