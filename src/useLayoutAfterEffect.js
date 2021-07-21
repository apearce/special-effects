import { useLayoutEffect, useRef } from 'react';

export default function useLayoutAfterEffect(effect, deps) {
    const deferredRef = useRef(false);

    useLayoutEffect(deferredRef.current ? effect : () => {}, deps);

    deferredRef.current = true;
};