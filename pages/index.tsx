import { useForm, SubmitHandler } from 'react-hook-form'
import { Header } from '~/components/header'
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header />
      <label htmlFor="input">
        <p>placeholder</p>
      </label>
      <input id="input" type="text" placeholder="placeholder" {...register('url')}></input>
      {errors.url && <p>{errors.url.message}</p>}
      <input type="submit" />
    </form>
  )
}

export default Home
