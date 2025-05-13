import React, { forwardRef } from 'react';

interface SearchFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ id, label, type = 'text', value, onChange, className = '' }, ref) => {
    return (
      <div className="relative leading-8">
        <input
          ref={ref}
          id={id}
          type={type}
          className={`searchNumber peer w-full p-2 border border-gray-300 focus:outline-none focus:border-indigo-500 ${className}`}
          value={value}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className="absolute bg-white px-2 left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
        >
          {label}
        </label>
      </div>
    );
  }
);

SearchField.displayName = 'SearchField';

export default SearchField;
