import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import CartWidget from './cartWidget'

const navigation = [  
  { name: 'Remeras', href: '#', current: false },
  { name: 'Buzos', href: '#', current: false },
  { name: 'Accesorios', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
        <div>
          <CartWidget/>
        </div>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="data:image/png;base64,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"
                    alt="Workflow"
                  />
                  <Link to={`/`}><img 
                    className="ehiddn lg:block h-20 w-auto"
                    src="data:image/png;base64,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"
                    alt="Workflow"
                  /></Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}