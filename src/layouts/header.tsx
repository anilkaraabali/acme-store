import { Logo } from '@/components/logo';
import { siteConfig } from '@/config';
import { Link } from '@nextui-org/link';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { LiaAngleDownSolid, LiaArrowRightSolid } from 'react-icons/lia';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar maxWidth='xl' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className='gap-6 sm:basis-full' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='lg:hidden'
        />
        <NavbarBrand>
          <NextLink
            aria-label='Go to homepage'
            className='flex items-center justify-start gap-1'
            color='foreground'
            href='/'
            title='Go to homepage'
          >
            <Logo />
            <p className='font-bold text-inherit'>ACME</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-8 lg:flex' justify='center'>
        {siteConfig.navMenuItems.map((item) =>
          item.children ? (
            <Dropdown key={item.href}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    className='bg-transparent p-0 text-base text-current data-[hover=true]:bg-transparent'
                    disableRipple
                    endContent={<LiaAngleDownSolid size={16} />}
                    radius='sm'
                    size='sm'
                    variant='light'
                  >
                    {item.label}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label='ACME features'
                className='w-[340px]'
                itemClasses={{
                  base: 'gap-4',
                }}
                variant='flat'
              >
                {item.children.map((child) => (
                  <DropdownItem
                    description={child.description}
                    href={child.href}
                    key={child.href}
                    startContent={<child.icon size={24} />}
                    title={child.label}
                  />
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem key={item.href}>
              <NextLink
                className='data-[active=true]:text-primary'
                color='foreground'
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          )
        )}
      </NavbarContent>

      <NavbarContent justify='end'>
        <Button
          color='primary'
          endContent={<LiaArrowRightSolid size={20} />}
          variant='shadow'
        >
          Log in
        </Button>
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href='#'
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export { Header };
