import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LayoutDash from '../components/LayoutDash'
import Layout from '../components/LayoutDash'
const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  })
  return (
    <LayoutDash>
      <div className="space-y-4">
        <h1 className="font-medium">Redirecionado para /home</h1>
      </div>
    </LayoutDash>
  )
}
export default Home
