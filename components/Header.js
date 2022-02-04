import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import openseaLogo from '../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const style = {
  wrapper: `bg-[#04111d] w-full justify-between w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `md:flex md:flex-1 flex md:w-[600px] flex-0 w-[100%] mr-[3px] mx-[0.8rem] w-max-[650px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full md:w-[600px] border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: `md:flex w-full items-center justify-end`,
  headerItem: `text-white md:mt-[0px] mt-[10px] px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] md:mt-[0px] mt-[10px] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={openseaLogo} height={40} width={40} />
          <div className={style.logoText}>Opensea</div>
        </div>
      </Link>
      <div className="hidden md:flex"> 
        <div className={style.searchBar}>
          <div className={style.searchIcon}>
            <AiOutlineSearch />
          </div>
          <input
            className={style.searchInput}
            placeholder="Search items, collections, and accounts"
          />
        </div>
        <div className={style.headerItems}>
          <Link href="/collections/0xD1ee6F78eCB12875a34e709b1EDd470d34222746">
            <div className={style.headerItem}> Collections </div>
          </Link>
          <div className={style.headerItem}> Stats </div>
          <div className={style.headerItem}> Resources </div>
          <div className={style.headerItem}> Create </div>
          <div className={style.headerIcon}>
            <CgProfile />
          </div>
          <div className={style.headerIcon}>
            <MdOutlineAccountBalanceWallet />
          </div>
        </div>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div
            className="z-10 fixed h-[100%] -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md bg-[#04111d] text-white animate-slide-in"
          >
            <div className={style.searchBar}>
              <div className={style.searchIcon}>
                <AiOutlineSearch />
              </div>
              <input
                className={style.searchInput}
                placeholder="Search items, collections, and accounts"
              />
            </div>
            <div className={style.headerItems}>
              <Link href="/collections/0xD1ee6F78eCB12875a34e709b1EDd470d34222746">
                <div className={style.headerItem}> Collections </div>
              </Link>
              <div className={style.headerItem}> Stats </div>
              <div className={style.headerItem}> Resources </div>
              <div className={style.headerItem}> Create </div>
              <div className={style.headerIcon}>
                <CgProfile />
              </div>
              <div className={style.headerIcon}>
                <MdOutlineAccountBalanceWallet />
              </div>
            </div>
            {toggleMenu && (
              <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
