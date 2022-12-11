import { zodResolver } from '@hookform/resolvers/zod'
import Head from 'next/head'
import { useForm, SubmitHandler } from 'react-hook-form'
import Body from '~/components/Body'
import Form from '~/components/Form'
import Input from '~/components/Input'
import { trpc } from '~/hocs/trpc'
import { NEXT_PUBLIC_BASE_URL } from '~/providers/environment'
import { schema } from '~/schemas/form'

type FormValues = {
  url: string
}

const Home = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const mutation = trpc.entry.add.useMutation({
    onSuccess: async ({ slug }) => {
      const url = [NEXT_PUBLIC_BASE_URL, slug].join('/')

      navigator.clipboard.writeText(url)

      reset()
    },
    onError: async (error) => {
      alert(error.message)
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => mutation.mutate(data)

  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="URL shortener" />
      </Head>
      <Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="https://example.com/" error={errors.url?.message} {...register('url')} />
        </Form>
      </Body>
    </>
  )
}

export default Home
