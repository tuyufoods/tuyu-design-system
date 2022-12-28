import { PropsWithChildren } from "react";

export interface ButtonProps {}

const Button = ({ children }: PropsWithChildren) => <button>{children}</button>;

export default Button;
