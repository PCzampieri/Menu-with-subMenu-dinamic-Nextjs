import MenuDash from './MenuDash'

const LayoutDash = ({ children }) => {
  return (
    <section className="bg-yellow-200 relative">
      <MenuDash />
      {children}
      <footer className="fixed bottom-0 w-full text-center py-2 font-medium bg-pink-200 ">
        Footer
      </footer>
    </section>
  )
}

export default LayoutDash
