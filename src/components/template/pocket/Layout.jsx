import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
