import { useForm, SubmitHandler } from 'react-hook-form'
import { Header } from '~/components/header'
import { Input } from '~/components/input'
import { useYupValidationResolver } from '~/hooks/yup'
import { schema } from '~/schemas/form'

type Form = {
  url: string
}

const Home = () => {
  const resolver = useYupValidationResolver(schema)

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Form>({ resolver })

  const onSubmit: SubmitHandler<Form> = (data) => console.log(data.url)

  return (
    <div className="flex flex-col w-full max-w-full mx-auto p-4 border border-gray-200 bg-white shadow">
      <div className="flex flex-col mb-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header />
          <label htmlFor="input">
            <p>placeholder</p>
          </label>
          <input id="input" type="text" placeholder="placeholder" {...register('url')}></input>
          {errors.url && <p>{errors.url.message}</p>}
          <Input id="url" type="url" placeholder="http://example.com" error="error" />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Home
