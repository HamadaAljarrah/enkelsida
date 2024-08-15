import { cn } from "@/lib/utils";
import { ComponentProps } from "react"

type Props = ComponentProps<'div'> & {};

const Container = ({className, children,...rest}: Props) => {
    return (
        <div {...rest} className={cn("max-w-[1160px] px-3", className)}>
            {children}
        </div>
    )
}

export default Container