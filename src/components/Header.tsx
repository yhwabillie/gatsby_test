import * as React from 'react'
import useThemeStore from '../store/useThemeStore'
import { Link } from 'gatsby'

export default function Header() {
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme)

  return (
    <header className="w-full fixed top-0 z-1">
      <div className="container m-auto flex justify-between items-center after:content-[''] after:w-full after:h-[22px] after:bg-black after:absolute after:top-0">
        {/* Left */}
        <nav className="relative before:block before:content-[''] before:w-[22px] before:h-[22px] before:absolute before:bottom-[-22px] before:left-0 before:bg-edge-round-1 after:block after:content-[''] after:bg-edge-round-1 after:absolute after:top-[22px] after:right-[-22px] after:w-[22px] after:h-[22px] rounded-br-3xl flex items-center gap-10 dark:bg-black">
          <Link to="/" className="ml-[20px] block w-48 h-header bg-logo-black dark:bg-logo-white bg-contain bg-no-repeat bg-center">
            <h1 className="sr-only">Logo</h1>
          </Link>
          <ul className="flex gap-x-8 pr-8">
            <li>
              <Link to="" className="text-white">
                💡 About Me
              </Link>
            </li>
            <li>
              <Link to="">💼 Career</Link>
            </li>
            <li>
              <Link to="">🧑‍💻 Projects</Link>
            </li>
            <li>
              <Link to="">🙋‍♀️ Problem Solving</Link>
            </li>
          </ul>
        </nav>

        {/* Right */}
        <div className="before:content-[''] before:bg-edge-round-2 before:w-[22px] before:h-[22px] before:block before:absolute before:bottom-[-22px] before:right-0 after:content-[''] after:block after:w-[22px] after:h-[22px] after:bg-edge-round-2 after:absolute after:top-[22px] after:left-[-22px] h-header rounded-bl-3xl relative z-1 bg-white dark:bg-black">
          <div className="flex items-center mt-[20px] mb-auto mx-[20px]">
            <button className="border-[1.5px] border-black dark:border-white rounded-[18px] px-[20px] py-[5px] box-border block">Contact ME</button>
            <button className="border-[1.5px] border-black dark:border-white w-[36px] h-[36px] rounded-[18px] block" onClick={toggleTheme}>
              T
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
