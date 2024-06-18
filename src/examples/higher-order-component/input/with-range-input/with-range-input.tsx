import React, { memo, NamedExoticComponent, useMemo, useRef } from 'react';

export type InputComponentProps<T> = {
    value: T;
    onChange: (value: T) => void;
};

export type RangeInputValue<T> = {
    from?: T;
    to?: T;
};

export type RangeInputProps<T> = {
    className?: string;
    value: RangeInputValue<T>;
    onChange: (value: RangeInputValue<T>) => void;
};

export const withRangeInput = <T, P = Record<string, unknown>>(
    InputComponent: React.ComponentType<InputComponentProps<T>>
): NamedExoticComponent<RangeInputProps<T> & P> =>

    memo(({ className, value, onChange, ...props }) => {

        const valueCopy = useRef(value);
        valueCopy.current = value;

        const { onChangeFrom, onChangeTo } = useMemo(
            () => ({
                onChangeFrom: (from: T): void => onChange({ ...(valueCopy.current || ({} as RangeInputValue<T>)), from }),
                onChangeTo: (to: T): void => onChange({ ...(valueCopy.current || ({} as RangeInputValue<T>)), to }),
            }),
            [onChange]
        );

        return (
            <div className={className} style={{display: 'flex'}}>
                <div>
                    <strong>From</strong>
                    <InputComponent {...props} value={value?.from} onChange={onChangeFrom} />
                </div>
                <div style={{marginLeft: 16}}>
                    <strong>To</strong>
                    <InputComponent {...props} value={value?.to} onChange={onChangeTo} />
                </div>
            </div>
        );
    });
