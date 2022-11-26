import { useForm, SubmitHandler } from 'react-hook-form'
import { Body } from '~/components/body'
import { Form } from '~/components/form'
import { Input } from '~/components/input'
import { trpc } from '~/hocs/trpc'
import { useYupValidationResolver } from '~/hooks/yup'
import { schema } from '~/schemas/form'

type Form = {
  url: string
}

const Home = () => {
  const addEntry = trpc.entry.add.useMutation()

  const resolver = useYupValidationResolver(schema)

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Form>({ resolver })

  const onSubmit: SubmitHandler<Form> = async (data) => {
    try {
      const { slug } = await addEntry.mutateAsync(data)

      alert(JSON.stringify({ slug }))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="https://example.com" error={errors.url?.message} {...register('url')} />
      </Form>
    </Body>
  )
}

export default Home
