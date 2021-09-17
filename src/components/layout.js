import Navbar from '../utils/navbar'

export default function Layout({ children }) {
    return (
      <>
        <Navbar/>
        <main>{children}</main>
      </>
    )
  }