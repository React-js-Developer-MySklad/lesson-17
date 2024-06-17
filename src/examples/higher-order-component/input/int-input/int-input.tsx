import {memo, Ref} from "react";
import {InputNumber} from "antd";
import {NumberInputProps} from "../input.type";


export const parser = (v: string): number => {
    const value = parseInt(v?.replace(/[^\d-]/g, ''), 10);
    if (Number.isNaN(value)) return 0;
    return value;
};

export type Props = NumberInputProps;

export const IntInput = memo<Props>(
    ({ className, ...props }) => {
        return (
            <InputNumber
                max={1000}
                className={className}
                placeholder='Введите цифры'
                {...props}
                parser={parser}
            />
        );
    });