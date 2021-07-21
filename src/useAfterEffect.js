import { useEffect, useRef } from 'react';

export default function useAfterEffect(effect, deps) {
    const deferredRef = useRef(false);

    useEffect(deferredRef.current ? effect : () => {}, deps);

    deferredRef.current = true;
};