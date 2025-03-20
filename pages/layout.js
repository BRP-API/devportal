import Header from '@/components/Header'
import Footer from '@/components/footer'
import Sidebar from '@/components/Sidebar'
 
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <main style={{ flex: 1 }} className='content'>{children}</main>
      </div>
      <Footer />
    </>
  )
}