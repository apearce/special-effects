import { useEffect, useRef } from 'react';
import { NOOP } from './utils';

export default function useAfterEffect(effect, deps) {
    const deferredRef = useRef(false);

    useEffect(deferredRef.current ? effect : NOOP, deps);

    deferredRef.current = true;
};