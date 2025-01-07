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
      <NavbarContent justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='md:hidden'
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-8 md:flex' justify='center'>
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
          as={NextLink}
          color='primary'
          endContent={<LiaArrowRightSolid size={20} />}
          href='/login'
          variant='shadow'
        >
          Log in
        </Button>
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color='foreground' href='#' size='lg'>
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
