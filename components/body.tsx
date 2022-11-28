import type { FunctionComponent } from 'react'

type BodyProps = {
  children: JSX.Element
}

const Body: FunctionComponent<BodyProps> = ({ children }) => (
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

Body.displayName = 'Body'

export default Body
