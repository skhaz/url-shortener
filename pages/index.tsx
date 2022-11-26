import { useForm, SubmitHandler } from 'react-hook-form'
import { Body } from '~/components/body'
import { Form } from '~/components/form'
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
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="https://example.com" error={errors.url?.message} {...register('url')} />
      </Form>
    </Body>
  )
}

export default Home
