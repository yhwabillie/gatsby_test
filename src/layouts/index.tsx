import * as React from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, PageProps } from 'gatsby'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import { useSectionRefStore } from '../store/storehooks'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollToPlugin)
}

const timeout = 500
const getTransitionStyles: any = {
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
}

export default function Layout(props: PageProps) {
  const nodeRef = React.useRef(null)
  const footerRef = React.useRef<any>(null)
  const { refArray }: any = useSectionRefStore()

  React.useEffect(() => {
    gsap.to(footerRef.current, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: refArray[4]?.current,
        start: 'bottom 80%',
        end: 'bottom 100%',
        toggleActions: 'play none none reverse',
      },
    })

    let links = gsap.utils.toArray('nav > ul > li > a')

    function setActive(link: any) {
      link.parentElement.classList.add('active')
    }

    function removeActive() {
      links.forEach((el: any) => el.parentElement.classList.remove('active'))
    }

    links.forEach((a: any, index: number) => {
      let element = document.querySelector(a.getAttribute('href').replace('/', ''))

      let linkST = ScrollTrigger.create({
        trigger: element,
        start: 'top top',
      })

      gsap.to(a, {
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom center',
          toggleClass: 'active',
          toggleActions: 'play none none reverse',
          onToggle: (self) => {
            self.isActive ? setActive(a) : removeActive()
          },
        },
      })

      a.addEventListener('click', (e: any) => {
        e.preventDefault()
        gsap.to(window, { scrollTo: element })
      })
    })
  }, [refArray])

  return (
    <>
      <Header />
      <TransitionGroup>
        <Transition
          key={props.location.pathname}
          nodeRef={nodeRef}
          in={true}
          out={true}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {(status) => {
            return (
              <>
                <main
                  ref={nodeRef}
                  className="dark:bg-black bg-white"
                  style={{
                    ...getTransitionStyles[status],
                  }}
                >
                  <div className="container m-auto">{props.children}</div>
                </main>
              </>
            )
          }}
        </Transition>
      </TransitionGroup>
      <Footer footerRef={footerRef} />
    </>
  )
}
