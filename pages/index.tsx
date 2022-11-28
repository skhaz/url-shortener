import { useForm, SubmitHandler } from 'react-hook-form'
import Body from '~/components/Body'
import Form from '~/components/Form'
import Input from '~/components/Input'
import { trpc } from '~/hocs/trpc'
import { useYupValidationResolver } from '~/hooks/yup'
import { schema } from '~/schemas/form'

type FormValues = {
  url: string
}

const Home = () => {
  const addEntry = trpc.entry.add.useMutation({ retry: 3 })

  const resolver = useYupValidationResolver(schema)

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>({ resolver })

  const onSubmit: SubmitHandler<FormValues> = async ({ url }) => {
    try {
      const r = await addEntry.mutateAsync({ url })

      alert(JSON.stringify(r.slug))
      reset()
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
