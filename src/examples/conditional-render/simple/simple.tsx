import {FC, ReactNode, useReducer} from "react";
import {ChildrenCheck} from "../../children/children-check/children-check";
import {Button, Divider} from "antd";

const Test = ({ children, id }: { children: ReactNode; id: string }) => {
    return <div>{id} - {children}</div>;
};


export const Simple: FC = () => {
    const [visible, toggle] = useReducer((v) => !v, false);

    return (
        <div>
            <ChildrenCheck>
                {visible && <Test id="1">Видно если true</Test>}
                {visible || <Test id="2">Видно если false</Test>}
                <Divider/>

                {visible
                    ? <Test id="3">Видно если true</Test>
                    : <Test id="4">Видно если false</Test>
                }
                <br/>
            </ChildrenCheck>
            <Button onClick={toggle}>toggle</Button>
        </div>
    );
};