import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const router = useRouter()

  const shortenRoute = (path: string) => {
    const [root, prefix, suffix] = path.split('/')

    let shortedRoute = `~${root}/${prefix}`
    if (suffix) shortedRoute += `/...`

    return shortedRoute
  }

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-[110] border-b border-gray-200 bg-opacity-30 py-4 backdrop-blur-lg backdrop-filter dark:border-gray-700">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                <Typewriter
                  options={{
                    strings: [shortenRoute(router.asPath)],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {/* <div className="mr-3 dark:invert">
                <Logo />
              </div> */}
              {/* {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 mb-1 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )} */}
            </div>
          </Link>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="link-underline dark:link-underline-black rounded-xl p-1 font-medium text-gray-900 hover:bg-gray-400/10 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </header>
      <SectionContainer>
        <main className="mb-auto">{children}</main>

        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
