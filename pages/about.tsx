
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'


export default function AboutPage() {
  return (
    <>

        <h1>About Page</h1>

        <h1 className={'title'}>
          {/* Ir a <a href="/">Home</a> */}
          <Link href='/'>HomePage</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.tsx</code>
        </p>



    </>

  )
}

AboutPage.getLayout = function getLayout (page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}