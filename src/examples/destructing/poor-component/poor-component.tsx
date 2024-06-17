import {FC} from "react";

export type PoorComponentProps = {
    one?: string;
    two?: number;
    three?: string | number;
};

export const PoorComponent: FC<PoorComponentProps> = (props) => {
    console.log(props);
    return <p>{JSON.stringify(props)}</p>;
};
