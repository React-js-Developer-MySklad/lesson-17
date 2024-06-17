import {createRangeInput, RangeInputProps} from "../createRangeInput/createRangeInput";
import {InputNumberProps} from "antd";
import {IntInputWithArrows} from "../int-number-with-arrows/int-number-with-arrows";

export type IntRangeInputProps = RangeInputProps<number>;

export const IntRangeInput = createRangeInput<number, Omit<InputNumberProps<number>, 'value' | 'onChange'>>(
    IntInputWithArrows
);
