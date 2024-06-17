import React, { ChangeEvent, memo, useMemo, useRef } from 'react';
import { MemoInput } from '../memo-input/memo-input';

export type Address = {
  city?: string;
  street?: string;
  house?: string;
};

export type SimpleAddressInputProps = {
  className?: string;
  value: Address;
  onChange: (value: Address) => void;
};

export const SimpleAddressInput = memo<SimpleAddressInputProps>(({ className, value, onChange }) => {
  const valueCopy = useRef(value);
  valueCopy.current = value;

  const { onChangeCity, onChangeStreet, onChangeHouse } = useMemo(
    () => ({
      onChangeCity: (e: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...(valueCopy.current || {}), city: e.target.value });
      },
      onChangeStreet: (e: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...(valueCopy.current || {}), street: e.target.value });
      },
      onChangeHouse: (e: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...(valueCopy.current || {}), house: e.target.value });
      },
    }),
    [onChange]
  );

  return (
    <div className={className}>
        <strong>city</strong>
        <MemoInput name="city" value={value?.city} onChange={onChangeCity} />

        <strong>street</strong>
        <MemoInput name="street" value={value?.street} onChange={onChangeStreet} />

        <strong>house</strong>
        <MemoInput name="house" value={value?.house} onChange={onChangeHouse} />
    </div>
  );
});