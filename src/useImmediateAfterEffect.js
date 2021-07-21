import { useRef } from 'react';
import useImmediateEffect from './useImmediateEffect';

export default function useImmediateAfterEffect(effect, deps) {
    const deferredRef = useRef(false);

    useImmediateEffect(deferredRef.current ? effect : () => {}, deps);

    deferredRef.current = true;
};