import { cn } from "@/lib/utils";
import { ComponentProps } from "react"

type Props = ComponentProps<'div'> & {};

const SiteContainer = ({ className, children, ...rest }: Props) => {
    return (
        <div {...rest} className={cn("w-full max-w-[1480px] mx-auto px-3", className)}
             style={{ width: 'clamp(100%, 80%, 1480px)' }}>
            {children}
        </div>
    );
}

export default SiteContainer