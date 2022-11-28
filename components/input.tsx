import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

type InputProps = { error?: string } & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => (
  <>
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
      ref={ref}
      {...props}
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
  </>
))

Input.displayName = 'Input'

export default Input
