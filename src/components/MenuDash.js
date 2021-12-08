import Link from 'next/link'
import { useRouter } from 'next/router'
import { menu } from '../components/contentMenuObject'

const MenuDash = () => {
  const router = useRouter()
  console.log('/' + router.pathname.split('/')[1])

  return (
    <header className="bg-blue-200">
      <nav className="flex h-full items-center container  mx-auto">
        <div className="flex w-full h-16 items-center justify-between">
          <article className="flex items-center space-x-5">
            <h1 className="font-bold text-2xl mr-4">LOGO</h1>
            {menu &&
              menu.map((item) => (
                <Link key={item.url} href={item.url}>
                  <a
                    className={` ${
                      item.children &&
                      item.url === `${'/' + router.pathname.split('/')[1]}`
                        ? 'bg-blue-500 pt-2 pb-5 px-2 mt-3 rounded-t-md'
                        : `${
                            !item.children &&
                            item.url === '/' + router.pathname.split('/')[1]
                              ? 'bg-blue-500 p-2 rounded-md'
                              : ''
                          }`
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
          </article>
          <article className="space-x-2 flex items-center">
            <h4>Notification</h4>
            <h4>Avatar</h4>
          </article>
        </div>
      </nav>
      {menu &&
        menu.map((submenu) => {
          if (
            submenu.children &&
            submenu.url === `${'/' + router.pathname.split('/')[1]}`
          ) {
            return (
              <div className="flex items-center bg-blue-500 h-16">
                <div className="container mx-auto space-x-4">
                  {submenu.children.map((sub) => (
                    <Link key={sub.name} href={sub.url}>
                      <a
                        className={` ${
                          sub.url === router.pathname
                            ? 'bg-white p-2 rounded-sm'
                            : ''
                        }`}
                      >
                        {sub.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )
          }
        })}
    </header>
  )
}

export default MenuDash
