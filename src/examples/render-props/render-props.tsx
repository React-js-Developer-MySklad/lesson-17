import { Avatar } from "antd";
import { Badge } from "antd";
import {RenderPropsAsFunction} from "./render-props-as-function/render-props-as-function";
import {RenderPropsAsJSX} from "./render-props-as-jsx/render-props-as-jsx";

export const RenderProps = () => {
    return (
        <>
            <RenderPropsAsFunction renderCount={
                count => (
                    <Badge count={count}>
                        <Avatar shape="square" size="large"/>
                    </Badge>
                )
            }
            >
                Content as Children
            </RenderPropsAsFunction>
            <RenderPropsAsJSX header={<div>header</div>} footer={<div>footer</div>}/>
        </>
    )
}