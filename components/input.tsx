import type { FunctionComponent, InputHTMLAttributes } from 'react'

export type InputProps = {
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: FunctionComponent<InputProps> = ({ error, id, ...rest }) => (
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      Url
    </label>
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

/*
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <input
      type="search"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleSearch"
      placeholder="Type query"
    />
  </div>
</div>
*/
