"use client"
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef, ComponentProps } from "react";



type Props = ComponentProps<"textarea"> & {
    onchange: (value: string) => void;
};


const EditTextInput = ({ className, onchange, ...rest }: Props) => {
    const [value, setValue] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
        onchange(event.target.value);
    };

    return (
        <textarea
            className={cn("px-1 py-0.5 text-black bg-transparent block w-full", className)}
            ref={textareaRef}
            onChange={handleChange}
            rows={1}
            style={{
                resize: "none", // Prevent manual resizing by the user
                overflow: "hidden", // Hide the scrollbar
            }}
            {...rest}
        />
    );
};

export default EditTextInput;
