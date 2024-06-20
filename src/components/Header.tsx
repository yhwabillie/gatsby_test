import * as React from 'react'
import { Link } from 'gatsby'
import { MdOutlineLightMode, MdNightlight, MdOutgoingMail } from 'react-icons/md'
import { useSectionRefStore } from '../store/storehooks'

0
export default function Header() {
  const { refArray }: any = useSectionRefStore()
  const [mode, setMode] = React.useState(window.localStorage.getItem('theme') === 'light' ? false : true)
  const [showMailTooltip, setShowMailTooltip] = React.useState<boolean>(false)
  const [showThemeTooltip, setShowThemeTooltip] = React.useState<boolean>(false)

  return (
    <header className="lg:bg-transparent dark:lg:bg-transparent bg-white dark:bg-black w-full z-1 2xl:h-[90px] h-[84px] fixed top-0 after:content-[''] after:block after:w-full after:h-[22px] after:bg-white dark:after:bg-black after:top-0 after:absolute after:z-0">
      <div className="container h-full m-auto flex justify-between items-center">
        {/* Left */}
        <nav className="gap-0 h-full relative pr-[20px] xl:pr-0 before:block before:content-[''] before:w-[22px] before:h-[22px] before:absolute before:bottom-[-22px] before:left-0 before:bg-edge-round-4 dark:before:bg-edge-round-1 after:block after:content-[''] after:bg-edge-round-4 dark:after:bg-edge-round-1 after:absolute after:top-[22px] after:right-[-22px] after:w-[22px] after:h-[22px] rounded-br-3xl flex items-center lg:gap-10 bg-white dark:bg-black">
          <Link
            to="/"
            className="ml-[20px] block lg:w-[192px] h-[84px] 2xl:h-[90px] lg:bg-logo-black lg:dark:bg-logo-white bg-contain bg-no-repeat bg-center z-1"
          >
            <h1 className="sr-only">Portfolio Website (웹사이트 이름)</h1>
          </Link>
          <Link to="/" className="bg-logo-mobile-black dark:bg-logo-mobile-white bg-cover bg-center bg-no-repeat w-[77px] h-[34px] lg:hidden">
            <span className="sr-only">Mobile Logo</span>
          </Link>
          <ul className="h-full hover:text-lightGray hidden xl:flex z-1">
            <li className={`text-[18px] leading-[84px] 2xl:leading-[90px] hover:text-black dark:hover:text-white px-[20px] cursor-pointer`}>
              <Link to="#about" className="block h-full w-full">
                💡 소개
              </Link>
            </li>
            <li className={`text-[18px] leading-[84px] 2xl:leading-[90px] hover:text-black dark:hover:text-white px-[20px] cursor-pointer`}>
              <Link to="#career" className="block h-full w-full">
                💼 경력
              </Link>
            </li>
            <li className="text-[18px] leading-[84px] 2xl:leading-[90px] hover:text-black dark:hover:text-white px-[20px] cursor-pointer">
              <Link to="#project" className="block h-full w-full">
                🧑‍💻 개인 프로젝트
              </Link>
            </li>
            <li className="text-[18px] leading-[84px] 2xl:leading-[90px] hover:text-black dark:hover:text-white pl-[20px] pr-[40px] cursor-pointer">
              <Link to="#problem" className="block h-full w-full">
                🙋‍♀️ Problem Solving
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right */}
        <div className="2xl:h-[90px] h-[84px] before:content-[''] before:bg-edge-round-3 dark:before:bg-edge-round-2 before:w-[22px] before:h-[22px] before:block before:absolute before:bottom-[-22px] before:right-0 after:content-[''] after:block after:w-[22px] after:h-[22px] after:bg-edge-round-3 dark:after:bg-edge-round-2 after:absolute after:top-[22px] after:left-[-22px] rounded-bl-3xl relative z-1 bg-white dark:bg-black">
          <div className="flex items-center gap-4 mt-[24px] 2xl:mt-[30px] mb-auto mx-[20px]">
            <button
              onMouseEnter={() => setShowMailTooltip(true)}
              onMouseLeave={() => setShowMailTooltip(false)}
              onClick={() => refArray[4].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="relative dark:hover:bg-gray rounded-[18px] flex justify-center items-center text-[26px] w-[36px] h-[36px]"
            >
              {showMailTooltip && (
                <div className="before:content:'' shadow-xl before:rotate-[180deg] before:border-t-[10px] border-0 before:border-t-blue before:border-l-[10px] before:border-r-[10px] before:border-x-transparent before:absolute before:top-[-10px] before:left-[38px] before:border-blue box-border absolute bottom-[-50px] left-[50%] text-[14px] leading-[40px] text-white w-[100px] h-[40px] rounded-[20px] translate-x-[-50%] bg-blue">
                  메일 보내기
                </div>
              )}
              <span className="sr-only">메일 보내기 버튼</span>
              <MdOutgoingMail />
            </button>

            <button
              className="relative dark:hover:bg-gray rounded-[18px] flex justify-center items-center text-[26px] w-[36px] h-[36px]"
              onMouseEnter={() => setShowThemeTooltip(true)}
              onMouseLeave={() => setShowThemeTooltip(false)}
              onClick={() => {
                const currentTheme = window.localStorage.getItem('theme')
                const bodyElement = document.getElementsByTagName('body')

                if (currentTheme === 'dark') {
                  window.localStorage.setItem('theme', 'light')
                  bodyElement[0].classList.replace('dark', 'light')
                  setMode(false)
                } else {
                  window.localStorage.setItem('theme', 'dark')
                  bodyElement[0].classList.replace('light', 'dark')
                  setMode(true)
                }
              }}
            >
              {showThemeTooltip && (
                <div className="before:content:'' shadow-xl before:rotate-[180deg] before:border-t-[10px] border-0 before:border-t-blue before:border-l-[10px] before:border-r-[10px] before:border-x-transparent before:absolute before:top-[-10px] before:left-[38px] before:border-blue box-border absolute bottom-[-50px] left-[50%] text-[14px] leading-[40px] text-white w-[100px] h-[40px] rounded-[20px] translate-x-[-50%] bg-blue">
                  테마 변경
                </div>
              )}
              <span className="sr-only">테마 변경 버튼</span>
              {mode ? <MdOutlineLightMode /> : <MdNightlight />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
