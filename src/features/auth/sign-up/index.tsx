import { Logo } from '@/components/logo';
import { NextPageWithLayout } from '@/pages/_app';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { AbstractIntlMessages, useTranslations } from 'next-intl';
import { useState } from 'react';

import { SignUpForm } from './form';
import { SignUpHeader } from './header';

interface SignUpProps {
  messages: AbstractIntlMessages;
}

function SignUp() {
  const t = useTranslations();

  const [step, setStep] = useState(0);

  return (
    <div className='flex h-screen w-screen'>
      <aside className='hidden w-full flex-1 flex-col items-center justify-center overflow-hidden bg-foreground lg:flex'>
        <div className='flex w-full max-w-sm flex-col'>
          <h1
            className='mb-9 text-center text-4xl text-background'
            dangerouslySetInnerHTML={{ __html: t.raw('Auth.signUp.title') }}
          />
          <Image
            alt='Acme store product sample'
            height={344}
            priority
            src='/images/product-sample@3x.webp'
            width={420}
          />
        </div>
      </aside>
      <section className='flex w-full flex-1 shrink grow basis-[10%] flex-col overflow-hidden rounded-l-[16px] bg-background lg:-ml-4'>
        <SignUpHeader />
        <main className='mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-5'>
          <Logo size='md' />
          <p className='my-6 text-center text-2xl font-extralight text-default-500'>
            {t('Auth.signUp.description')}
          </p>

          {step === 0 ? (
            <>
              <div className='flex min-w-64 flex-col gap-4'>
                <Button
                  size='lg'
                  startContent={
                    <Image
                      alt='Sign up with Google'
                      height={24}
                      src='/icons/socials/google.svg'
                      width={24}
                    />
                  }
                  variant='bordered'
                >
                  {t('Auth.signUp.cta.google')}
                </Button>
                <Button
                  size='lg'
                  startContent={
                    <Image
                      alt='Sign up with Facebook'
                      height={24}
                      src='/icons/socials/facebook.svg'
                      width={24}
                    />
                  }
                  variant='bordered'
                >
                  {t('Auth.signUp.cta.facebook')}
                </Button>
                <div className='text-center text-sm text-gray-500'>
                  {t('Common.or').toUpperCase()}
                </div>
                <Button
                  color='primary'
                  fullWidth
                  onPress={() => setStep(1)}
                  size='lg'
                  type='submit'
                  variant='shadow'
                >
                  {t('Auth.signUp.cta.email')}
                </Button>
              </div>
            </>
          ) : (
            <SignUpForm />
          )}
        </main>
      </section>
    </div>
  );
}

export type { SignUpProps };
export default SignUp;

SignUp.getLayout = (page: NextPageWithLayout) => page;
