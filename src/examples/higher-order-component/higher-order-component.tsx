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
        <>
            {/*<h2>Ant Design Input</h2>*/}
            {/*<IntInput value={numberValue} onChange={setNumberValue}/>*/}

            {/*<h2>Ant Design Input + Arrows</h2>*/}
            {/*<IntInputWithArrows value={numberValue} onChange={setNumberValue}/>*/}

            {/*<h2>Ant Design Input + Arrows + Range</h2>*/}
            {/*{JSON.stringify(numberRangeValue)}*/}
            {/*<IntRangeInput value={numberRangeValue} onChange={setNumberRangeValue}/>*/}

            {/*<h2>Ant Design Input with Digit filter</h2>*/}
            {/*<OnlyDigitInput value={onlyDigitValue} onChange={setOnlyDigitValue} />*/}

            {/*<h2>Ant Design with filter not One</h2>*/}
            {/*<InputWithoutOne onChange={setOnlyDigitValue} value={onlyDigitValue}/>*/}

            {/*<h2>Ant Design Input with Digit and not one filter</h2>*/}
            {/*<InputWithOnlyDigitAndNotOne onChange={setOnlyDigitValue} value={onlyDigitValue}/>*/}

            {/*<h2>HOC with filters non One and only Digits</h2>*/}
            {/*<InputWithHOCComposition value={numberRangeValue} onChange={setNumberRangeValue}/>*/}



        </>
    )
}