import { Button } from "antd";
import {FC, ReactNode, useReducer} from "react";

interface FunctionAsChildrenExampleProps {
    children?: (count: number) => ReactNode;
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
