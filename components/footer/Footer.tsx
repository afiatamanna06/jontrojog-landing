import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { footerLinks, socialLinks } from './FooterData'

export default function Footer() {
  const date = new Date().getFullYear().toString()
  return (
    <footer className="border-t-2 border-black dark:border-t-2 dark:border-white flex justify-center">
      <div className="max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex flex-row items-center text-2xl">
              <div className="font-semibold tracking-wider">Jontrojog</div>
            </div>
            <p className="text-sm leading-6">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-3 text-white dark:text-black">
              {socialLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="bg-black dark:bg-[#ffffffff] rounded-full p-2"
                >
                  {item.Icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <ul role="list" className="mt-6 lg:mt-0 space-y-4">
                  {footerLinks.slice(0, 4).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="leading-6 dark:text-gray-300 dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-0">
                <ul role="list" className="mt-6 lg:mt-0 space-y-4">
                  {footerLinks.slice(4, 8).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="leading-6 dark:text-gray-300 dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div className="mt-10 xl:mt-0">
                <h3 className="font-semibold leading-6 dark:text-white tracking-wider">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-2 text-sm leading-6 dark:text-gray-300">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <form className="relative mt-6 sm:flex sm:max-w-md">
                  <input
                    type="email"
                    name="email"
                    className="w-full h-[100%] rounded-full ring-0 outline-0 font-medium placeholder:font-medium focus:ring-0 text-black dark:text-white border-2 border-black dark:border-2 dark:border-white bg-white dark:bg-black py-3 pl-5 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <div className="absolute cursor-pointer inset-y-0 right-0 flex items-center border-2 border-black dark:border-2 dark:border-white bg-white dark:bg-black text-black dark:text-white rounded-full p-3">
                    <FiArrowRight size={20} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 dark:text-gray-400 text-center">
            &copy; {date} Jontrojog, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
