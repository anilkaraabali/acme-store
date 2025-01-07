import NextLink from 'next/link';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface LogoProps extends ComponentPropsWithRef<'svg'> {}

const Logo = forwardRef<SVGSVGElement, LogoProps>((props, ref) => (
  <NextLink
    aria-label='Go to homepage'
    className='flex items-center justify-start gap-1'
    color='foreground'
    href='/'
    title='Go to homepage'
  >
    <svg
      fill='none'
      height='36'
      viewBox='0 0 32 32'
      width='36'
      {...props}
      ref={ref}
    >
      <path
        clipRule='evenodd'
        d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
    <p className='font-bold text-inherit'>ACME</p>
  </NextLink>
));

export type { LogoProps };
export { Logo };
