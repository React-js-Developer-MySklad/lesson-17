import { useCallback, useRef } from 'react';
import {NumberInputProps} from "../input.type";
export const getOnlyNumber = (value: string): string => value?.replace(/[^\d.-]/g, '');

export const getValue = (value: string | number): number => parseFloat(getOnlyNumber(value.toString()));

export const useCreateUpDown = (
    value: number | string,
    onChange: NumberInputProps['onChange'],
    limits?: { max: number; min: number }
): ((shift: number) => () => void) => {
    const { max = 1000, min = -1000 } = limits || {};
    const valueCopy = useRef(value);
    valueCopy.current = value;

    return useCallback(
        (shift: number) => (): void => {
            const result = getValue(valueCopy.current) + shift;
            if (result < min) onChange(0);
            else if (result > max) onChange(max);
            else onChange(result);
        },
        [min, max, onChange]
    );
};
