import * as React from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, PageProps } from 'gatsby'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import Observer from 'gsap/dist/Observer'
import { useGSAP } from '@gsap/react'
import { useSectionRefStore } from '../store/storehooks'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollToPlugin, Observer)
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
    gsap.fromTo(
      footerRef.current,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          scrub: 2,
          trigger: refArray[3]?.current,
          start: '100% 60%',
          end: '100% 100%',
        },
      },
    )

    let links = gsap.utils.toArray('nav.desktop-gnb-wrap > ul > li > a')

    function setActive(link: any) {
      link.parentElement.classList.add('active')
    }

    function removeActive() {
      links.forEach((el: any) => el.parentElement.classList.remove('active'))
    }

    links.forEach((a: any, index: number) => {
      let element = document.querySelector(a.getAttribute('href').replace('/', ''))
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
      //클릭하여 섹션 이동
      a.addEventListener('click', (e: any) => {
        e.preventDefault()
        gsap.to(window, {
          scrollTo: {
            y: element,
            offsetY: 90,
          },
        })
      })
    })
  }, [refArray])

  const getDocumentTitle = (path: string) => {
    if (path === '/') {
      return '홈 본문'
    } else if (path.startsWith('/work-experience')) {
      return '경력사항 본문'
    } else if (path.startsWith('/projects')) {
      return '개인 프로젝트 본문'
    } else if (path.startsWith('/problem-solving')) {
      return '문제 해결 본문'
    }
  }

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
                  style={{
                    ...getTransitionStyles[status],
                  }}
                >
                  <section>
                    <h2 className="sr-only">{getDocumentTitle(`${props.path}`)}</h2>
                    {props.children}
                  </section>
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
