import type { GetServerSideProps } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { decode } from '~/helpers/decode'
import { prisma } from '~/providers/prisma'

type Params = { slug: string } & ParsedUrlQuery

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as Params

  const id = decode(slug)

  if (!id) {
    return {
      props: {},
    }
  }

  const entry = await prisma.entry.findUnique({
    where: {
      id,
    },
  })

  if (!entry) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  const { url } = entry

  return {
    redirect: {
      destination: url,
      permanent: true,
    },
  }
}

const Slug = () => null

export default Slug
