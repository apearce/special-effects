import useImmediateEffect from 'use-immediate-effect';
import { NOOP } from './utils';

export default function useImmediateConditionalEffect(effect, bool) {
    useImmediateEffect(bool ? effect : NOOP);
};