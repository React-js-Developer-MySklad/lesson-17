import { Button } from "antd";
import {FC, useReducer} from "react";

interface FunctionAsChildrenExampleProps {
    children: (count: number) => React.ReactNode;
}

export const FunctionAsChildrenExample: FC<FunctionAsChildrenExampleProps> = ({ children }) => {
    const [count, increase] = useReducer((v) => v + 1, 0);

    return (
        <div>
            <div>{children(count)}</div>
            <br/>
            <Button onClick={increase}>increase</Button>
        </div>
    );
};
