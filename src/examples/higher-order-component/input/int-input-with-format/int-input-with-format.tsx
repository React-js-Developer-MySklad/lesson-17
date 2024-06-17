import {Input} from "antd";
import {FC} from "react";
import {compose} from "../../../../utils/compose";
import {createRangeInput} from "../createRangeInput/createRangeInput";
import {withArrows} from "../withArrows/withArrows";

type WithFormatProps = { onChange: (value: string) => void };
/* Это компонент высшего порядка или higher-order component (HOC)
 * Принимает функцию форматирования value, и возвращает другой HOC, который уже принимает компонент
 * Строго говоря это все единый HOC
 * Прием, когда одна функция возвращает другую, называется "каррирование",
 * с помощью него можно легко композировать несколько форматирований
 * */
const withFormat =
    (formatter: (value: string) => string) =>
        // это функция, что принимает компонент, изменяет его поведение и возвращает функциональный компонент, это тоже HOC
        <P extends WithFormatProps>(Component: React.ComponentType<P>) =>
            // это функциональный компонент
            ({ onChange, ...props }: P) =>
                <Component {...(props as P)} onChange={(v) => onChange(formatter(v))} />;

type InputProps = {
    value: string;
    onChange: (value: string) => void;
};
const MyInput: FC<InputProps> = ({ value, onChange }) => (
    <Input value={value} onChange={(e) => onChange(e.target.value)} />
);

const getOnlyDigits = (v: string) => v.replace(/\D/g, '');
const getWithoutOne = (v: string) => v.replace(/1/g, '');

export const OnlyDigitInput = withFormat(getOnlyDigits)(MyInput);

export const InputWithoutOne = withFormat(getWithoutOne)(MyInput);

/**
 * Каррирование позволяет композировать несколько форматирований, а также несколько компонентов высшего порядка
 * */

// Композиция форматирвания
const formatter = compose(getWithoutOne, getOnlyDigits);

const withOnlyDigitAndNotOne = withFormat(formatter);

// Композиция HOC
const withHOCComposition = compose(createRangeInput<number>, withArrows, withFormat(formatter));

export const InputWithOnlyDigitAndNotOne = withOnlyDigitAndNotOne(MyInput);
export const InputWithHOCComposition = withHOCComposition(MyInput);
