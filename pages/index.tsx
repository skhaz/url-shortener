import { useForm, SubmitHandler } from 'react-hook-form'
import Body from '~/components/Body'
import Form from '~/components/Form'
import Input from '~/components/Input'
import { getBaseUrl } from '~/helpers/urls'
import { trpc } from '~/hocs/trpc'
import { useYupValidationResolver } from '~/hooks/yup'
import { schema } from '~/schemas/form'

type FormValues = {
  url: string
}

const Home = () => {
  const resolver = useYupValidationResolver(schema)

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>({ resolver })

  const mutation = trpc.entry.add.useMutation({
    onSuccess: async ({ slug }) => {
      const url = [process.env.BASE_URL, slug].join('/')

      navigator.clipboard.writeText(url)

      alert('URL copied to clipboard')

      reset()
    },
    onError: async (error) => {
      alert(error.message)
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => mutation.mutate(data)

  return (
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="https://example.com/" error={errors.url?.message} {...register('url')} />
      </Form>
    </Body>
  )
}

export default Home
