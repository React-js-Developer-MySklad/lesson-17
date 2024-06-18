import {withRangeInput, RangeInputProps} from "../with-range-input/with-range-input";
import {InputNumberProps} from "antd";
import {IntInputWithArrows} from "../int-number-with-arrows/int-number-with-arrows";

export type IntRangeInputProps = RangeInputProps<number>;

export const IntRangeInput = withRangeInput<number, Omit<InputNumberProps<number>, 'value' | 'onChange'>>(
    IntInputWithArrows
);
