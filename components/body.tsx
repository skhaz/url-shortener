import type { FunctionComponent } from 'react'

export type BodyProps = {
  children: JSX.Element
}

export const Body: FunctionComponent<BodyProps> = ({ children }) => (
  <div
    className="
    flex
    flex-col
    w-full
    max-w-full
    mx-auto
    p-4
    border
    border-gray-200
    bg-white shadow"
  >
    <div className="flex flex-col mb-4">{children}</div>
  </div>
)
