import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { getBaseUrl } from '~/helpers/urls'
import { AppRouter } from '~/server/routers/_app'

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    }
  },

  ssr: true,
})
