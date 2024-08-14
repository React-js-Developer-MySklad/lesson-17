import {PoorComponent, PoorComponentProps} from "../poor-component/poor-component";
import React, {FC} from "react";

type ReachProps = {
    four?: number;
} & PoorComponentProps;

export const RichComponent: FC<ReachProps> =
    ({ four, ...props }) => (
    <>
        {/* JSX attributes spread order*/}
        {four}
        {/*<PoorComponent one="2" three={4} {...props} />*/}
        {/*<PoorComponent one="2" {...props} three={4} />*/}

        {/*/!* two type *!/*/}
        {/*<PoorComponent {...{ two: '' }} {...{ two: '2' }} {...{ two: undefined }}   />*/}

        {/*/!* Optional value *!/*/}
        {/*<PoorComponent />*/}

    </>
);
