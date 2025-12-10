import Providers from './providers'
import '@/index.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Financially Empowering African Youth through Trade Skills Scholarships',
  description:
    'The Dorcas Scholars Fund empowers African youth through trade skills training and business startup support.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16 md:pt-20">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
