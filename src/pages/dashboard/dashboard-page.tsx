import React, {ReactNode} from "react";
import {DestructingExample} from "../../examples/destructing/destructing";
import {Children} from "../../examples/children/children";
import {RenderProps} from "../../examples/render-props/render-props";
import {ConditionalRender} from "../../examples/conditional-render/conditional-render";
import {EventSwitch} from "../../examples/event-switch/event-switch";
import {HigherOrderComponent} from "../../examples/higher-order-component/higher-order-component";
import {MutateState} from "../../examples/mutate-state/mutate-state";



export const DashboardPage = () => {
    return (
        <>
            {/*<MutateState/>*/}
            {/*<DestructingExample/>*/}
            {/*<Children/>*/}
            {/*<RenderProps/>*/}
            {/*<ConditionalRender/>*/}
            {/*<EventSwitch/>*/}
            <HigherOrderComponent/>
        </>
    )
}