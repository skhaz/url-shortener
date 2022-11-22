import { useForm, SubmitHandler } from 'react-hook-form'
import { useYupValidationResolver } from '~/hooks/yup'
import { schema } from '~/schemas/form'

type Input = {
  url: string
}

const Home = () => {
  const resolver = useYupValidationResolver(schema)
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Input>({ resolver })

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data.url)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="input">
        <p>placeholder</p>
      </label>
      <input id="input" type="text" placeholder="placeholder" {...register('url')}></input>
      {errors.url && <p>{errors.url?.message}</p>}
      <input type="submit" />
    </form>
  )
}

export default Home
