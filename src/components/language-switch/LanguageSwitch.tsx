import {
  Button,
  Code,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const locales = [
  {
    icon: (
      <svg
        id='flag-icons-gb'
        viewBox='0 0 640 480'
        width={24}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 0h640v480H0z' fill='#012169' />
        <path
          d='m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z'
          fill='#FFF'
        />
        <path
          d='m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z'
          fill='#C8102E'
        />
        <path d='M241 0v480h160V0zM0 160v160h640V160z' fill='#FFF' />
        <path d='M0 193v96h640v-96zM273 0v480h96V0z' fill='#C8102E' />
      </svg>
    ),
    label: 'English',
    value: 'en',
  },
  {
    icon: (
      <svg
        id='flag-icons-tr'
        viewBox='0 0 640 480'
        width={24}
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill-rule='evenodd'>
          <path d='M0 0h640v480H0z' fill='#e30a17' />
          <path
            d='M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9'
            fill='#fff'
          />
          <path
            d='M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z'
            fill='#e30a17'
          />
          <path
            d='m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z'
            fill='#fff'
          />
        </g>
      </svg>
    ),
    label: 'Türkçe',
    value: 'tr',
  },
];

const LanguageSwitch: FC = () => {
  const { locale, route } = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          aria-label='Language switch'
          startContent={locales.find((l) => l.value === locale)?.icon}
          title='Language switch'
          variant='light'
        >
          {locale?.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Language selection menu'
        id='language-dropdown-menu'
        variant='faded'
      >
        {locales.map((locale) => (
          <DropdownItem
            aria-label={locale.label}
            as={NextLink}
            href={route}
            isDisabled={locale.value === 'tr'}
            key={locale.value}
            startContent={locale.icon}
            title={
              <>
                {locale.label}{' '}
                {locale.value === 'tr' && (
                  <Code color='secondary'>Coming soon</Code>
                )}
              </>
            }
            variant='flat'
          />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export { LanguageSwitch };
