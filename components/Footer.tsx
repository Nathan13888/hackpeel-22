import Image from 'next/image'

import { discordLink, instagramLink, linkedinLink } from '../util/config'

import smallLogo from '../public/images/logo-small.png'
import InstagramLogo from "../public/images/ig.png"
import { FaLinkedin, FaDiscord } from 'react-icons/fa'

const buttonColoring =
  'bg-blue-700 text-white hover:bg-white hover:text-blue-700 active:bg-blue-500 active:text-white transition-all duration-300';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-4 px-12 lg:px-20 py-8 bg-slate-900 items-center z-[999] text-center sm:text-left" style={{backgroundColor: "#101e47"}}>
      <div className="flex justify-between items-center gap-6 lg:w-1/3 mb-4">
        <div>
          <h2 className="text-4xl text-white">hack::peel</h2>
          <p className="text-lg text-blue-500">
            December 16 - 17, 2022
          </p>
        </div>

        <Image
          src={smallLogo}
          width={100}
          height={100}
          quality={100}
          className="rounded-xl hidden sm:block"
          alt="Logo"
        />
      </div>

      <a 
        className={`px-9 py-3 rounded-xl text-lg ${buttonColoring}`} 
        href="mailto:hello@hackpeel.ca" 
        target="_blank" 
        rel="noreferrer"
      >
        Contact us!
      </a>

      <hr className="h-px bg-white w-full lg:w-[40%] my-6" />

      <div className="flex items-center gap-3 text-4xl">
        <a
          href={linkedinLink}
          className="text-[#0A66C2] hover:text-[#0A66C2]/75 active:text-[#0A66C2]/50 duration-200"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href={discordLink}
          className="text-[#5865F2] hover:text-[#5865F2]/75 active:text-[#5865F2]/50 duration-200"
          target="_blank"
          rel="noreferrer"
          title="Discord"
        >
          <FaDiscord />
        </a>

        <a
          href={instagramLink}
          className="text-[#F77737] hover:text-[#F77737]/75 active:text-[#F77737]/50 duration-200"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <Image src={InstagramLogo} width={30} height={30} alt="instagram" />
        </a>
      </div>

      <hr className="h-px bg-white w-full lg:w-[40%] mt-6 mb-2" />

      <p className='text-md text-gray-200 font-sans'>
        Made with Next.js, Tailwind, and 💙 by the hack::peel tech team
      </p>
    </footer>
  )
}