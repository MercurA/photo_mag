import Head from "next/head"
import { useContext, useEffect } from "react"

import { strings } from "../utils/constants"
import DesktopContainer from "../containers/DesktopContainer"
import MobileContainer from "../containers/MobileContainer"
import { AppContext } from "./_app"

const Home = ({isMobileDevice}) => {
  const context = useContext(AppContext)
  const { isPopupOn } = context

  const preventDefault = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (isPopupOn) {
      window.addEventListener('mousewheel', preventDefault, { passive: false })
      window.addEventListener('touchmove', preventDefault, { passive: false })
    }

    return () => {
      window.removeEventListener('mousewheel', preventDefault, { passive: false })
      window.removeEventListener('touchmove', preventDefault, { passive: false })
    }
  }, [isPopupOn])


  return (
    <>
      <Head>
        <title>{strings.title}</title>
        <meta name="home page" content="Photo galery" />
        <meta name="keywords" content="photos, photography, hi-res, galery" />
      </Head>
      {isMobileDevice ? <MobileContainer /> : <DesktopContainer />}
    </>
  )
}

Home.getInitialProps = ({ req }) => {
  const userAgent = req?.headers['user-agent']

  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  return { isMobileDevice }
}

export default Home