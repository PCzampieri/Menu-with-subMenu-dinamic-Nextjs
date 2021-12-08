import MenuDash from './MenuDash'

const LayoutDash = ({ children }) => {
  return (
    <section className="bg-yellow-200 relative">
      <MenuDash />
      <div className="container mx-auto">{children}</div>

      <footer className="flex flex-col fixed bottom-0 w-full text-center py-2 font-medium bg-pink-200 ">
        <a
          href="https://github.com/PCzampieri/Menu-with-subMenu-dinamic-Nextjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/PCzampieri/Menu-with-subMenu-dinamic-Nextjs
        </a>
        Footer
      </footer>
    </section>
  )
}

export default LayoutDash
