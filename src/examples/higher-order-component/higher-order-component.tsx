import {IntInput} from "./input/int-input/int-input";
import {useState} from "react";
import {IntInputWithArrows} from "./input/int-number-with-arrows/int-number-with-arrows";
import {IntRangeInput, IntRangeInputProps} from "./input/int-range-input/int-range-input";
import {
    InputWithHOCComposition,
    InputWithOnlyDigitAndNotOne,
    InputWithoutOne,
    OnlyDigitInput
} from "./input/int-input-with-format/int-input-with-format";

export const HigherOrderComponent = () => {
    const [numberValue, setNumberValue] = useState(0)
    const [numberRangeValue, setNumberRangeValue] = useState<IntRangeInputProps['value']>({ from: 0, to: 0 });
    const [onlyDigitValue, setOnlyDigitValue] = useState('')

    return (
        <div style={{width: 500}}>
            <h2>IntInput</h2>
            <IntInput value={numberValue} onChange={setNumberValue}/>

            <h2>Ant Design Input + Arrows</h2>
            <IntInputWithArrows value={numberValue} onChange={setNumberValue}/>

            <h2>Ant Design Input + Arrows + Range</h2>
            {JSON.stringify(numberRangeValue)}
            <IntRangeInput value={numberRangeValue} onChange={setNumberRangeValue}/>


            <h2>HOC Partial Apply</h2>
            <OnlyDigitInput placeholder='Введите цифру' value={onlyDigitValue} onChange={setOnlyDigitValue} />
            <InputWithoutOne onChange={setOnlyDigitValue} value={onlyDigitValue}/>


            <h2>HOC Partial Apply + Composition</h2>
            <InputWithOnlyDigitAndNotOne onChange={setOnlyDigitValue} value={onlyDigitValue}/>
            <InputWithHOCComposition value={numberRangeValue} onChange={setNumberRangeValue}/>
        </div>
    )
}