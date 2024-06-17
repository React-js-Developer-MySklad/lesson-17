import {FC} from "react";

type ButtonProps = {
    some?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, ...rest }) =>
    <button type="button" className={className} {...rest} />;