import {Input, InputNumberProps} from "antd";
import {ComponentType, FC} from "react";
import {compose} from "../../../../utils/compose";
import {withRangeInput} from "../with-range-input/with-range-input";
import {withArrows} from "../with-arrows/with-arrows";

type WithFormatProps = { onChange: (value: string) => void };

const withFormat =
    (formatter: (value: string) => string) =>

        <P extends WithFormatProps>(Component: ComponentType<P>) =>

            ({ onChange, ...props }: P) =>

                <Component {...(props as P)} onChange={(v) => onChange(formatter(v))} />;


type InputProps = Omit<InputNumberProps, 'value' | 'onChange'> & {
    value: string;
    onChange: (value: string) => void;
};

const MyInput: FC<InputProps> = ({value, onChange, ...props}) => (
    // @ts-ignore
    <Input value={value} onChange={(e) => onChange(e.target.value)} {...props} />
);



const getOnlyDigits = (v: string) => v.replace(/\D/g, '');
const getWithoutOne = (v: string) => v.replace(/1/g, '');

export const OnlyDigitInput = withFormat(getOnlyDigits)(MyInput);
export const InputWithoutOne = withFormat(getWithoutOne)(MyInput);



// Композиция форматирвания
const formatter = compose(getWithoutOne, getOnlyDigits);


// Композиция HOC
const withHOCComposition = compose(withRangeInput<number>, withArrows, withFormat(formatter));
export const InputWithHOCComposition = withHOCComposition(MyInput);

const withOnlyDigitAndNotOne = withFormat(formatter);
export const InputWithOnlyDigitAndNotOne = withOnlyDigitAndNotOne(MyInput);


