import Image from "next/image";
import Link from "next/link";


export default function Page() {
  return (
    <div className="flex h-screen justify-center items-center w-full bg-hover">
      <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
        <Image src="/logo.png" alt="logo" width={500} height={500} className="w-11 h-11" />
        <h2 className="text-2xl font-bold text-white my-2 mb-8 text-center ">Signup to spotify</h2>
        <form>
        <input type="text" placeholder="Your Name" className="outline-none border-1 border-neutral-600 p-2  w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"/>
        <input type="text" placeholder="Your Email" className="outline-none border-1 border-neutral-600 p-2  w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"/>
          <input type="text" placeholder="Your Password" className="outline-none border-1 border-neutral-600 p-2  w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"/>
          <button className="bg-green-400 py-3 rounded-lg w-full font-bold cursor-pointer hover:bg-green-300">
            Continue
          </button>
          <div className="text-secondary-text text-center my-6">
            <span>
              Already have  an account?
            </span>
            <Link href="Login" className="ml-2 underline text-white hover:text-green-600 ">sign in now</Link>
          </div>
        </form>
      </div>

    </div>
  )
}
 