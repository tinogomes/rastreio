import React, { forwardRef } from 'react';

interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ label, id, type, value, onChange, disabled, ...props }, ref) => {
    return (
      <div className="relative leading-8">
        <input
          ref={ref}
          id={id}
          type={type}
          className={`searchNumber peer w-full p-2 border border-gray-300 focus:outline-none focus:border-indigo-500 ${
            disabled ? 'bg-gray-100 cursor-not-allowed' : ''
          }`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <label
          htmlFor={id}
          className={`absolute bg-white px-2 left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs ${
            disabled ? 'text-gray-400' : ''
          }`}
        >
          {label}
        </label>
      </div>
    );
  }
);

SearchField.displayName = 'SearchField';

export default SearchField;
