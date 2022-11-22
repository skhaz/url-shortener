import { useCallback } from 'react'
import { Resolver } from 'react-hook-form'
import { InferType, AnySchema, ValidationError } from 'yup'

export const useYupValidationResolver = <S extends AnySchema>(validationSchema: AnySchema) =>
  useCallback<Resolver<InferType<S>>>(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })
        return {
          values,
          errors: {},
        }
      } catch (errors) {
        if (errors instanceof ValidationError) {
          return {
            values: data,
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                [currentError.path ?? 'unknownPath']: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              }),
              {}
            ),
          }
        }
        return {
          values: data,
          errors: {
            unknownError: {
              type: 'unknown',
              message: 'Unknown error',
            },
          },
        }
      }
    },
    [validationSchema]
  )
