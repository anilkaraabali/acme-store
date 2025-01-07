/* eslint-disable no-console */
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ZodType, z } from 'zod';

type FormData = {
  email: string;
};

const Newsletter = () => {
  const t = useTranslations('Common');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const schema: ZodType<FormData> = z.object({
    email: z
      .string()
      .min(1, { message: t('form.required') })
      .email(t('form.email.errorMessage')),
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

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');

      return;
    }

    const token = await executeRecaptcha('newsletter');

    return token;
  }, [executeRecaptcha]);

  const onSubmit: SubmitHandler<FormData> = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        const token = await handleReCaptchaVerify();

        // Send data to your API
        console.log('data', data, 'token', token);

        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
        reset();
      } catch (error) {
        console.error('Newsletter error', error);
      } finally {
        setIsLoading(false);
      }
    },
    [handleReCaptchaVerify, reset]
  );

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <section
      className='mx-auto flex h-auto w-full justify-center pt-16'
      id='newsletter'
    >
      <div className='relative isolate flex w-full max-w-7xl flex-col overflow-hidden bg-gray-900 px-6 py-24 text-background shadow sm:px-24 xl:rounded-3xl'>
        <h2 className='text-center text-4xl font-semibold tracking-tight lg:text-5xl dark:text-white'>
          {t('newsletter.title')}
        </h2>
        <p className='mx-auto mt-6 max-w-lg text-center text-lg text-gray-300'>
          {t('newsletter.description')}
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
                label={t('form.email.label')}
                labelPlacement='inside'
                placeholder={t('form.email.placeholder')}
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
            {submitted ? t('newsletter.alert.title') : t('newsletter.cta')}
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
