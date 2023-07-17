import { twMerge } from "tailwind-merge";
import BoxProps from "@/interfaces/BoxProps";

const Box: React.FC<BoxProps> = ({children, className}) => {
    return (
        <div className={twMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
        `, className)}>
            { children }
        </div>
    );
}

export default Box;