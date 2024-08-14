import {useCallback, useEffect, useState} from "react";

export const MutateState = () => {
        const [data, setData] = useState([]);
        const [counter, setCounter] = useState(0);
        const [isDataFull, setIsDataFull] = useState(false);

        useEffect(() => {
            if (data.length > 5) {
                setIsDataFull(true)
            }
        }, [data]);

        const onAddData = () => {
            // setData([...data, counter])
            setData(data => ([...data, counter]))
            setCounter(counter + 1)
        }

        // const onAddDataUseCallback = useCallback(() => setData(data => ([...data, counter])), [counter])

        return <>
            <div>
                <button onClick={() => {
                    data.push(counter);
                    //setData(data);
                    setCounter(counter + 1)
                }}>Add Data by reference
                </button>

                <button onClick={onAddData}>Add Data</button>

            </div>

            <ul>{data.map(item => <li key={item}>{item}</li>)}</ul>
            {isDataFull && <div>Data is full!</div>}
        </>
}