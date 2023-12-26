import Link from 'next/link'
import Image from 'next/image'
import errorImage from '@/public/assets/images/404-error-page-templates.png'

export default function NotFound() {
  return (
    <main className='flex justify-center items-center py-24'>
      <div className="">
        <Image src={errorImage} alt='not found image' className='px-4 sm:px-0' priority />
        <h2 className='2xl md:text-4xl font-Roboto font-bold text-center pt-6'> 404- Page Not Found</h2>
        <div className=" text-center my-10">
          <p className='text-gray-400 text-sm md:text-base'>{`We're sorry, the page you requested could not be found`}</p>
          <p className='text-gray-400 text-sm md:text-base'>Please go back to the home page</p>
        </div>
        <div className="flex justify-center">
          <Link href="/"
            className='px-6 py-2.5 text-white bg-navyBlue rounded-full hover:bg-ui_secondary1'
          > Go Home</Link>
        </div>
      </div>
    </main>
  )
}