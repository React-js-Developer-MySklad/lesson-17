import {FC, memo, ReactElement, ReactNode, useReducer} from "react";
import {Button} from "antd";

interface RenderPropsAsFunctionProps {
    renderCount: (count: number) => ReactElement;
    children?: ReactNode;
}

export const RenderPropsAsFunction: FC<RenderPropsAsFunctionProps> = ({ renderCount, children }) => {
    const [count, increase] = useReducer((v) => v + 1, 0);

    return (
        <div>
            <div>{children}</div>
            <div>{renderCount(count)}</div>
            <Button onClick={increase}>increase</Button>
        </div>
    );
};