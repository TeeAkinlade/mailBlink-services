import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa"
// import Nav from '././home/nav/nav'


const Legal = () => {
  return (
    <div>
      {/* <Nav/> */}
      <div className='pt-[7rem] pb-[7rem] bg-[#fff] xs:px-[0.75rem] lg:px-[0rem]'>
        <div className='lg:flex gap-[5rem] items-center'>
          <div className='lg:ms-[150px]'>
            <h1 className='text-[#1F284F] font-poppins text-[50px] font-[700] leading-[60px]'>Legal terms</h1>
            <h3 className='mt-[24px] text-[#1F284F] font-poppins text-[20px] font-[500] leading-[32px]'>mailblink prides itself on providing users access to all their data.</h3>
            <p className='mt-[16px] text-[#575757] text-[20px] font-poppins font-[400] leading-[32px] lg:w-[550px]'>This begins with our products giving you all the data on your network, but it extends to any of your personal information. We pride ourself on ensuring this is safe.</p><br />
            <Link href='#'
              className='mt-[24px] w-[180px] text-[16px] text-[#FFF] font-[600] leading-[24px] font-poppins'
              style={{
                background: `rgba(0, 112, 240, 0.90)`,
                border: `1px solid rgba(0, 112, 240, 0.90))`,
                borderRadius: "30px",
                padding: "12px 24px",
              }}
            >
              Download all PDF
            </Link>
          </div>
          <div className='lg:mr-[118px] xs:mt-[5rem] lg:mt-[0rem]'>
            <Image src='/assets/images/image 78.png' width='580' height='400' />
          </div>
        </div>
      </div>
      <div className='mt-[5rem] mb-5 xs:px-[0.75rem] lg:px-0'>
        <h1 className='text-[#1f2129] font-poppins lg:text-[32px] xs:text-[28px] font-[700] leading-[40px] text-center'>Need more information? Consult our Terms of <br className='xs:hidden lg:block'/> Service and other legal agreements.</h1>
        <div className='flex flex-wrap gap-[2%] lg:ms-[5rem] mt-[4rem]'>
          <div className='lg:w-[370px] xs:w-[100%] md:w-[350px] h-[280px] rounded-[22px] border-[1px] border-solid border-[#DFDFDF] bg-[#fff] py-[5px] lg:px-[25px] xs:px-[20px] sm:px-[15px]'>
            <h1 className='text-[#1B1C31] text-[27px] font-[800] leading-[33px] tracking-tighter-[-0.72px] mt-[30px]'>Privacy in Statement</h1>
            <p className='text-[#64607D] text-[16px] font-[500] leading-[30px] tracking-tighter-[-0.32px] mt-[46px]'>How MailBlink handles your personal <br /> information when you use our services</p>
            <p className='mt-[3rem] text-[#01966B] text-[16px] font-[600] leading-[16px] flex gap-2 items-center'><Link href='/legal-concerns/privacy-policy'>Learn more</Link> <FaArrowRight /></p>
          </div>
          <div className='lg:w-[370px] xs:w-[100%] md:w-[350px] lg:mt-0 xs:mt-[3rem] md:mt-0 h-[280px] rounded-[22px] border-[1px] border-solid border-[#DFDFDF] bg-[#fff] py-[5px] lg:px-[25px] xs:px-[20px]'>
            <h1 className='text-[#1B1C31] text-[27px] font-[800] leading-[33px] tracking-tighter-[-0.72px] mt-[30px]'>Cookie Policy</h1>
            <p className='text-[#64607D] text-[16px] font-[500] leading-[30px] tracking-tighter-[-0.32px] mt-[46px]'>How MailBlink handles your personal <br /> information when you use our services</p>
            <p className='mt-[3rem] text-[#01966B] text-[16px] font-[600] leading-[16px] flex gap-2 items-center'><Link href='/legal-concerns/cookie-policy'>Learn more</Link> <FaArrowRight /></p>
          </div>
          <div className='lg:w-[370px] xs:w-[100%] md:w-[350px] lg:mt-0 xs:mt-[3rem] md:mt-[3rem] h-[280px] rounded-[22px] border-[1px] border-solid border-[#DFDFDF] bg-[#fff] py-[5px] lg:px-[25px] xs:px-[20px]'>
            <h1 className='text-[#1B1C31] text-[27px] font-[800] leading-[33px] tracking-tighter-[-0.72px] mt-[30px]'>Term of Use</h1>
            <p className='text-[#64607D] text-[16px] font-[500] leading-[30px] tracking-tighter-[-0.32px] mt-[46px]'>What you agree to in order to use <br /> MailBlink</p>
            <p className='mt-[3rem] text-[#01966B] text-[16px] font-[600] leading-[16px] flex gap-2 items-center'><Link href='/legal-concerns/terms-of-use'>Learn more</Link> <FaArrowRight /></p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Legal;
