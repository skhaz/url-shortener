import type { FunctionComponent, InputHTMLAttributes } from 'react'

export type InputProps = {
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: FunctionComponent<InputProps> = ({ error, ...rest }) => (
  <div>
    <input
      className="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none
        focus:shadow-outline"
      {...rest}
    />
    {error && (
      <span
        className="
        flex
        items-center
        font-medium
        tracking-wide
        text-red-500
        text-xs
        mt-1
        ml-1"
      >
        {error}
      </span>
    )}
  </div>
)
