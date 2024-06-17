import { Divider } from "antd";
import {FC, ReactElement} from "react";

interface RenderPropsAsJSXProps {
    header: ReactElement;
    footer: ReactElement;
}

export const RenderPropsAsJSX: FC<RenderPropsAsJSXProps> = ({ footer, header }) => (
    <div>
        {header}
        <Divider />
        {footer}
    </div>
);