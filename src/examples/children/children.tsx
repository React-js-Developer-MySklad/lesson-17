import React from "react";
import {ChildrenCheck} from "./children-check/children-check";
import {FunctionAsChildrenExample} from "./functional-as-children/functional-as-children";
import {Avatar, Badge} from "antd";

const Test = () => <>Компонент</>

export const Children = () => {
    return (
        <>
            {/*<ChildrenCheck>0</ChildrenCheck>*/}
            {/*<ChildrenCheck>{0}</ChildrenCheck>*/}
            {/*<ChildrenCheck>{null}</ChildrenCheck>*/}
            {/*<ChildrenCheck>{undefined}</ChildrenCheck>*/}
            {/*<ChildrenCheck>{false}</ChildrenCheck>*/}
            {/*<ChildrenCheck>{true}</ChildrenCheck>*/}

            {/*<ChildrenCheck>{*/}
            {/*    [2, '3', null, undefined, false,*/}
            {/*        <div key="1">test</div>,*/}
            {/*        <div key="2">test</div>*/}
            {/*    ]}*/}
            {/*</ChildrenCheck>*/}

            {/*<ChildrenCheck>*/}
            {/*    <div>Элемент</div>*/}
            {/*</ChildrenCheck>*/}
            {/*<ChildrenCheck>*/}
            {/*    <Test />*/}
            {/*</ChildrenCheck>*/}

            <FunctionAsChildrenExample>
                {
                    count => (
                        <Badge count={count}>
                            <Avatar shape="square" size="large" />
                        </Badge>
                    )
                }
            </FunctionAsChildrenExample>
        </>
    )
}