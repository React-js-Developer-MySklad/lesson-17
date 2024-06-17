import React from "react";
import {DestructingExample} from "../../examples/destructing/destructing";
import {Children} from "../../examples/children/children";
import {RenderProps} from "../../examples/render-props/render-props";
import {ConditionalRender} from "../../examples/conditional-render/conditional-render";
import {EventSwitch} from "../../examples/event-switch/event-switch";
import {HigherOrderComponent} from "../../examples/higher-order-component/higher-order-component";


export const DashboardPage = () => {
    return (
        <>
            {/*<DestructingExample/>*/}
            {/*<Children/>*/}
            {/*<RenderProps/>*/}
            {/*<ConditionalRender/>*/}
            {/*<EventSwitch/>*/}
            <HigherOrderComponent/>
        </>
    )
}