import Image from 'next/image';
import { FC, useMemo } from 'react';

const Collaboration: FC = () => {
  const logos = useMemo(
    () => [
      {
        alt: 'Calendly',
        height: 37,
        name: 'calendly',
        width: 150,
      },
      {
        alt: 'Citizen',
        height: 86,
        name: 'citizen',
        width: 83,
      },
      {
        alt: 'Loccitane',
        height: 55,
        name: 'loccitane',
        width: 227,
      },
      {
        alt: 'WeTransfer',
        height: 76,
        name: 'wetransfer',
        width: 537,
      },
      {
        alt: 'Slack',
        height: 49,
        name: 'slack',
        width: 191,
      },
    ],
    []
  );

  return (
    <section className='py-12' id='collaboration'>
      <div className='container !max-w-5xl'>
        <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5'>
          {logos.map((logo, index) => (
            <li
              className='flex h-20 w-full items-center justify-center rounded-3xl bg-content2 p-4'
              key={index}
            >
              <Image
                alt={logo.alt}
                className='max-h-8 max-w-[85%]'
                height={logo.height}
                src={`/logos/${logo.name}.svg`}
                width={logo.width}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Collaboration };
