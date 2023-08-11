import React, {useState} from "react";

import {
  AiOutlineGithub,
  AiFillPhone,
  AiFillLinkedin,
} from "react-icons/ai";


const Contacts = ({ activeColor, isNightMode }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };
  
  
  return (
    <div>
      <section className={`${isNightMode ? 'bg-[var(--bg-color)]' : 'bg-[var(--primary-dark-900)]'} min-h-screen ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} pl-[15px] md:pl-[300px] pr-[15px]`}>
        <div className="pt-[30px] pb-[20px] max-w-[1000px] w-full mx-auto">
          <div className="mb-[60px] flex flex-shrink-0 flex-grow-0 w-[100%] max-w-full">
            <h2 className="font-[700] text-[40px] relative before:h-[4px] before:w-[50px] before:bg-[var(--skin-color)] before:absolute before:top-[100%] before:left-0 after:h-[4px] after:w-[25px] after:bg-[var(--skin-color)] after:absolute after:top-[100%] after:left-0 after:mt-[8px]">
              Contact Me
            </h2>
          </div>
          <div className="text-[25px] mb-[50px] text-center text-[var(--skin-color)]">
            <h3>Have any Questions?</h3>
          </div>

          <div className="grid sm:grid-col-2 md:grid-cols-3 gap-5">
            <div className=" md:pl-0 flex flex-col justify-center items-center">
              <div className="text-[var(--skin-color)]">
                <AiFillPhone size={25} />
              </div>
              <h4 className="text-[18px] font-[700] uppercase mt-[15px] ">
                Call me on
              </h4>
              <p className={`text-[16px] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-700)]'} font-[400] leading-[25px] hover:text-[var(--skin-color)]`}>
                +254746162395
              </p>
            </div>

            <div className="pl-[15px] flex flex-col justify-center items-center">
              <div className="text-[var(--skin-color)]">
                <AiOutlineGithub size={25} />
              </div>
              <h4 className="text-[18px] font-[700] uppercase mt-[15px]">
                Colaborate On
              </h4>
              <p className={`text-[16px] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-700)]'} font-[400] leading-[25px] hover:text-[var(--skin-color)]`}>
                <a href="https://github.com/mackrineawino">GitHub</a>
              </p>
            </div>
            <div className="pl-[15px] flex flex-col justify-center items-center">
              <div className="text-[var(--skin-color)]">
                <AiFillLinkedin size={25} />
              </div>
              <h4 className="text-[18px] font-[700] uppercase mt-[15px]">
                DM On
              </h4>
              <p className={`text-[16px] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-700)]'} font-[400] leading-[25px] hover:text-[var(--skin-color)]`}>
                <a href="https://www.linkedin.com/in/mackrine-awino-9315a91a4/">
                  LinkedIn
                </a>
              </p>
            </div>
            
          </div>
          <div>
            <div className="text-[25px] mb-[20px] text-center text-[var(--skin-color)] uppercase mt-[50px]">
              Get in touch
            </div>
            <div className="flex justify-center items-center h-screen">
            <form className="text-center" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border-[1px] border-[var(--primary-dark-50)] text-[16px] text-[var(--text-black-700)] rounded-[10px] mb-[15px] py-3 pl-[15px] flex-shrink-0 flex-grow-0 w-[80%] max-w-[80%] md:flex-shrink-0 md:flex-grow-0 md:w-[40%] md:max-w-[40%]"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border-[1px] border-[var(--primary-dark-50)] text-[16px] text-[var(--text-black-700)] rounded-[10px] mb-[15px] py-3 pl-[15px] flex-shrink-0 flex-grow-0 w-[80%] max-w-[80%] md:ml-5 md:flex-shrink-0 md:flex-grow-0 md:w-[38%] md:max-w-[38%]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border-[1px] border-[var(--primary-dark-50)] text-[16px] text-[var(--text-black-700)] rounded-[10px] mb-[15px] py-3 pl-[15px] flex-shrink-0 flex-grow-0 w-[80%] max-w-[80%]"
              />
              <textarea
                cols="30"
                rows="10"
                name="message"
                placeholder="Type the message here"
                value={formData.message}
                onChange={handleChange}
                className="border-[1px] border-[var(--primary-dark-50)] text-[16px] text-[var(--text-black-700)] rounded-[10px] mb-[50px] pl-[15px] flex-shrink-0 flex-grow-0 w-[80%] max-w-[80%]"
              ></textarea>
              <button type="submit" className="block mx-auto border-none text-[16px] font-[500] py-[12px] px-[35px] text-white rounded-[10px] bg-[var(--skin-color)] whitespace-nowrap hover:transition-all hover:scale-105">
                Submit
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
