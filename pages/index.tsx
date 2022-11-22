import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useCallback } from 'react'
import { useForm, SubmitHandler, Resolver } from 'react-hook-form'
import * as yup from 'yup'
import { InferType, SchemaOf, AnySchema, ValidationError } from 'yup'
import { useYupValidationResolver } from '~/hooks/yup'
import hashids from '~/providers/hashids'
import prisma from '~/providers/prisma'
import styles from '~/styles/Home.module.css'

type Input = {
  url: string
}

const schema = yup.object({
  url: yup.string().url().required(),
})

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
      <input type="submit" />
      {errors.url && <p>{errors.url?.message}</p>}
    </form>
  )
}

export default Home
