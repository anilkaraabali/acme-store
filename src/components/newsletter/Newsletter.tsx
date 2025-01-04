import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ZodType, z } from 'zod';

type FormData = {
  email: string;
};

const Newsletter = () => {
  const t = useTranslations('Common.newsletter');

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const schema: ZodType<FormData> = z.object({
    email: z
      .string()
      .min(1, { message: t('email.required') })
      .email(t('errors.email')),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsLoading(true);
      // Send data to your API
      // eslint-disable-next-line no-console
      console.log(data);

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className='mx-auto flex h-auto w-full justify-center'
      id='newsletter'
    >
      <div className='relative isolate flex w-full max-w-7xl flex-col overflow-hidden bg-gray-900 px-6 py-24 text-background shadow sm:px-24 xl:rounded-3xl'>
        <h2 className='text-center text-4xl font-semibold tracking-tight lg:text-5xl dark:text-white'>
          {t('title')}
        </h2>
        <p className='mx-auto mt-6 max-w-lg text-center text-lg text-gray-300'>
          {t('description')}
        </p>
        <Form
          className='mx-auto mt-10 w-full max-w-lg flex-row gap-4'
          onSubmit={handleSubmit(onSubmit)}
          validationBehavior='aria'
        >
          <Controller
            control={control}
            name='email'
            render={({ field }) => (
              <Input
                {...field}
                errorMessage={errors.email?.message}
                isInvalid={!!errors.email?.message}
                isRequired
                label={t('email.label')}
                labelPlacement='inside'
                placeholder={t('email.placeholder')}
                size='sm'
                type='email'
                variant='flat'
              />
            )}
          />
          <Button
            color={submitted ? 'success' : 'primary'}
            isLoading={isLoading}
            size='lg'
            type='submit'
            variant='solid'
          >
            {submitted ? t('alert.title') : t('cta')}
          </Button>
        </Form>
        <svg
          aria-hidden='true'
          className=' absolute left-1/2 -z-10 -translate-x-1/2'
          height={1024}
          viewBox='0 0 1024 1024'
          width={1024}
        >
          <circle
            cx='512'
            cy='512'
            fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
            fillOpacity='0.7'
            r='512'
          />
          <defs>
            <radialGradient
              cx='0'
              cy='0'
              gradientTransform='translate(512 512) rotate(90) scale(512)'
              gradientUnits='userSpaceOnUse'
              id='759c1415-0410-454c-8f7c-9a820de03641'
              r='1'
            >
              <stop stopColor='#7775D6' />
              <stop offset='1' stopColor='#E935C1' stopOpacity='0' />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export { Newsletter };
