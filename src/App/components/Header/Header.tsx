import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { HeaderDiv, menuButton, menuItems } from './styles';
import Link from 'next/link';
import { MdOutlineLogout } from 'react-icons/md';
import { logout } from '@/App/services/mutation/auth.mutation';
import { popSucess } from '../PopUp/popSuccess';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Header({ user }: { user: string }) {
  const handleLogout = () => {
    logout();
    popSucess('logout successfully');
    localStorage.clear();
  };

  return (
    <HeaderDiv>
      <Link href="/">
        <div className="flex cursor-pointer">
          <img
            className="h-8 w-auto sm:h-10 ml-8"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
          <p className="text-white font-bold text-l ml-8 pt-2">
            Mext plataform
          </p>
        </div>
      </Link>
      <div className="flex items-center mr-8">
        {/* Profile dropdown */}
        <Menu data-testid="test-profile-menu" as="div" className="relative">
          <div>
            <Menu.Button
              data-testid="test-profile-toggle-button"
              className={menuButton}
            >
              <p className="ml-2 text-white font-semibold text-sm">{user}</p>
              <FiChevronDown className="text-white w-6 h-6" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className={menuItems}>
              <div className="py-1">
                <Menu.Item>
                  {({ active }: any) => (
                    <Link
                      onClick={handleLogout}
                      data-testid="test-logout-link"
                      href="/signin"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'group flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      <MdOutlineLogout
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Sair
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </HeaderDiv>
  );
}
