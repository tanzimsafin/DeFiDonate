import {useRef} from 'react'
interface InputProps {
    onChange: (value: number) => void;
}

export default function Input({ onChange }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleChange() {
        if (inputRef.current) {
            onChange(parseFloat(inputRef.current.value));
        }
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="amount" onChange={handleChange} />
        </div>
    );
}
