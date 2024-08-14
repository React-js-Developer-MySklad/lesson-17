import {FC, HTMLAttributes} from "react";

type ButtonProps = {
    some?: string;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> =
    ({ className, ...rest }) =>
        <button type="button" className={className} {...rest} />;