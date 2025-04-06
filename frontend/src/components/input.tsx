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
        <div className="relative w-full">
  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    <span className="text-pink-400 sm:text-sm">Ξ</span>
  </div>
  <input
    ref={inputRef}
    type="text"
    placeholder="Amount"
    onChange={handleChange}
    className="block w-full rounded-md bg-gray-800 border border-gray-700 py-3 pl-10 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
  />
  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
    <span className="text-gray-400 sm:text-sm">USDT</span>
  </div>
</div>
    );
}
