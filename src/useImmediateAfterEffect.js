import { useRef } from 'react';
import useImmediateEffect from 'use-immediate-effect';
import { NOOP } from './utils';

export default function useImmediateAfterEffect(effect, deps) {
    const deferredRef = useRef(false);

    useImmediateEffect(deferredRef.current ? effect : NOOP, deps);

    deferredRef.current = true;
};