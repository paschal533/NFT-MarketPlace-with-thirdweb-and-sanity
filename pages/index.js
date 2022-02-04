import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/V3WU5skoHvCfvfMLgL5gm4NPoBjpU4gTmOkz8d561r09FrMC-UN-h5vDNbgVKsoNzQ2NdIQPGxC-8mHmd5tPmqbvUEaTPZdB0HNP=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  walletConnectWrapper: `flex relative bg-transparent flex-wrap flex-col justify-center items-center h-screen w-screen `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-white text-center m-[5px] text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName)
    })()
  }, [address])

  return (
    <div className={style.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.container}>
          <div className={style.walletConnectWrapper}>
            <button
              className={style.button}
              onClick={() => connectWallet('injected')}
            >
              Connect Wallet
            </button>
            <div className={style.details}>
              You need metamask installed in your Chrome to be
              <br /> able to run this app. And make sure you are connected to a Rinkeby network
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
