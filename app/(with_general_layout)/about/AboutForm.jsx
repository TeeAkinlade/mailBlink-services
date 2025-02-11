const AboutForm = () => {
  return (
    <div className="md:py-10 py-6 px-5 bg-white shadow-lg rounded-xl ">
      <form action="">
        <div>
          <label classNam='mb-2'>
            First name
          </label>
            <input type="text" placeholder="enter first name" />
        </div>
        <div>
          <label classNam='mb-2'>
            Last name
          </label>
            <input type="text" placeholder="enter last name" />
        </div>
        <div>
          <label classNam='mb-2'>
            Email
          </label>    
          <input type="text" placeholder="enter email address" />
        </div>
        <div className="w-fit my-5 ">
          <button className=" bg-navyBlue text-white px-8 py-3 border border-navyBlue hover:text-navyBlue hover:bg-white hover:border-navyBlue rounded-full transition duration-150 ease-in-out cursor-pointer">Book my Demo</button>
        </div>
      </form>
    </div>
  );
};

export default AboutForm;