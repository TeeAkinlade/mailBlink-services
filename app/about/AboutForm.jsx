const AboutForm = () => {
  return (
    <div className="md:py-10 px-5 bg-white shadow-lg rounded-xl ">
      <form action="">
          <label className="w-[381px] text-zinc-600 text-xs font-medium font-['Poppins']flex-col justify-start items-start gap-1 inline-flex">
            First name
            <input type="text" placeholder="enter first name" className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Poppins'] leading-normal"/>
          </label>
          <label className="w-[381px] text-zinc-600 text-xs font-medium font-['Poppins']flex-col justify-start items-start gap-1 inline-flex">
            Last name
            <input type="text" placeholder="enter last name" className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Poppins'] leading-normal"/>
          </label>
        <label className="self-stretch grow shrink basis-0 pl-3 pr-[145px] py-3 bg-white rounded-lg border border-neutral-300 justify-start items-center inline-flex">
          Email
          <input type="text" placeholder="enter email address" className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Poppins'] leading-normal" />
        </label>    
        <div className="w-fit my-5 ">
          <button className=" bg-navyBlue text-white px-8 py-3 border border-navyBlue hover:text-navyBlue hover:bg-white hover:border-navyBlue rounded-full transition duration-150 ease-in-out cursor-pointer">Contact Us Now!</button>
        </div>
      </form>
    </div>
  );
};

export default AboutForm;
