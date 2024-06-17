import React, { FC, useCallback, useState } from 'react';
import { AddressInput, Address, AddressInputProps } from './address-input/address-input';
import { SimpleAddressInput } from './simple-address-input/simple-address-input';

export type EventSwitchExampleProps = {
    className?: string;
};

export type EventSwitchState = Record<'address1' | 'address2' | 'address3', Address>;

export const EventSwitch: FC<EventSwitchExampleProps> = ({ className }) => {
    const [address, setAddress] = useState<Address>({} as Address);
    const [state, setState] = useState<EventSwitchState>({} as EventSwitchState);

    const onChange = useCallback<AddressInputProps['onChange']>(
        (value, name) => setState((v) => ({ ...v, [name]: value })),
        []
    );

    return (
        <div className={className}>
            {JSON.stringify(address)}
            {/*<SimpleAddressInput value={address} onChange={setAddress} />*/}

            {JSON.stringify(state)}
            <AddressInput name="address1" value={state.address1} onChange={onChange} />
            <AddressInput name="address2" value={state.address2} onChange={onChange} />
            <AddressInput name="address3" value={state.address3} onChange={onChange} />
        </div>
    );
};
