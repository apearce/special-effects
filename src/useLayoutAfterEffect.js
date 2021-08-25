import { useLayoutEffect, useRef } from 'react';
import { NOOP } from './utils';

export default function useLayoutAfterEffect(effect, deps) {
    const deferredRef = useRef(false);

    useLayoutEffect(deferredRef.current ? effect : NOOP, deps);

    deferredRef.current = true;
};