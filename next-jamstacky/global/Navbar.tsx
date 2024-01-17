import Image from "next/image";
import Link from "next/link";
// import Logo from '../icons/logo.jpg';
import Logo from '@/app/icons/logo.jpg'

export default function Navbar() {
    return (
      <header className="py-6 md:px-16 px-6 border-b  z-30 md:mb-6 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
           <Link href="/" className=" rounded ">          
            <Image src={Logo} width={300} height={150} alt="logo" />      
          </Link>    
          <nav>
            <ul className="flex items-center gap-x-8">
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-400 duration-300"
                >
                  Jamstack
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-purple-400 duration-300"
                >
                  Hire Remote Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-400 duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-400 duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-400 duration-300"
                >
                  Compare
                </Link>
              </li>
            </ul>
            <h1>
            </h1>
          </nav>
        </div>
      </header>
    );
  }
  