import React, { FC } from 'react';

export type ChildrenCheckProps = {
    children: React.ReactNode;
    // children: React.ReactElement;
};

export const ChildrenCheck: FC<ChildrenCheckProps> = ({ children }) => {
    console.log({ children, type: typeof children });
    return <div>{children}</div>;
};
