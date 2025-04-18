import { Link } from 'react-router-dom'

import { Button } from './Button'
import { Container } from './Container'
import { TextField } from './Fields'
import { Logomark } from './Logo'
import { NavLinks } from './NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 py-20 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-2xl font-medium tracking-tight text-white">K8Mate</p>
                <p className="mt-1 text-lg text-gray-400">K8s Monitoring Simplified</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          {/* <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6"> */}
            {/* <div className="relative flex h-24 w-24 flex-none items-center justify-center"> */}
              {/* <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" /> */}
              {/* <Image src={qrCode} alt="" unoptimized /> */}
            {/* </div> */}
            {/* <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store.
              </p>
            </div> */}
          {/* </div> */}
        </div>
        {/* <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div> */}
      </Container>
    </footer>
  )
}
