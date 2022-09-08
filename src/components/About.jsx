import React from "react";
import Indicator from "./Indicator";

function About() {
  return (
    <div id="about" className="about flex flex-col justify-evenly justify-items-center items-center content-center self-center bg-zinc-900">

      <div className="about-container w-4/6 md:w-3/6">

        <div className="about-title overflow-hidden h-[2.75rem] sm:h-[5.45rem] xl:h-20 my-6">
          <div className="about-title-wrapper text-center animate-alternate h-full">
            <h2 className="about-title-item-one text-4xl sm:text-5xl xmd:text-6xl font-bold mb-[2.15rem] sm:mb-[2.2rem]">About me...</h2>
            <h2 className="about-title-item-two text-4xl sm:text-5xl xmd:text-6xl font-bold">...and more.</h2><br />
          </div>
        </div>

        <div className="about-content mb-6">
          <p className="text-justify hidden xmd:block">Programming has always been my passion. I started with{" "}<span className="font-bold">PHP</span> during my university studies while improving my{" "}<span className="font-bold text-red-700">digital marketing</span>,{" "}<span className="font-bold text-red-700">design</span> and{" "}<span className="font-bold text-red-700">UX/UI design</span> skills.{" "}<span className="text-responsive">{" "}Little by little, I gained confidence and attended Ironhack's Web Development Bootcamp, where my vision of programming changed and my skills improved a lot.</span> I became fluent in{" "}<span className="font-bold text-red-700">MERN Stack</span> as well as{" "}<span className="font-bold text-red-700">semantic HTML, CSS</span>{" "}and other tools like{" "}<span className="font-bold text-red-700">WordPress</span>. I have found in{" "}<span className="font-bold text-red-700">JavaScript</span> my ideal partner, and every day I try to improve little by little. Do you want to see how?</p>
          <p className="text-justify block xmd:hidden">Programming has always been my passion. I started with{" "}<span className="font-bold">PHP</span> during my university studies while improving my{" "}<span className="font-bold text-red-700">JavaScript</span> and{" "}<span className="font-bold text-red-700">UX/UI design</span> skills.{" "}I gained confidence and attended Ironhack's Web Development Bootcamp, where my skills improved a lot.</p>
        </div>

        <ul className="work-timeline">
            <li>
                <article className="work-timeline-element lg:hover:animate-microzoom transition-all bg-black hover:bg-zinc-800 hover:shadow-xl rounded-lg p-6">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">
                        <div className="work-container flex flex-col w-full">
                            <div className="date-and-name flex flex-col xlg:flex-row justify-center xlg:justify-between justify-items-center items-center xlg:items-end content-end">
                                <h3 className="font-bold text-md sm:text-lg text-red-700">SEM & SEO Specialist</h3>
                                <time dateTime="" className="italic font-light my-1 xlg:my-0">Jul, 2021 – Jan, 2022</time>
                            </div>
                            <h4 className="text-sm font-semibold date-and-name flex flex-col xlg:flex-row justify-center xlg:justify-between justify-items-center items-center xlg:items-end content-end">123 Innovation Group S.L.</h4>
                            <hr className="my-3"/>
                            <ul>
                                <li className="mb-2">• I optimized the campaign budget of 5 clients by 50% with an increase in ROI improvement of 15%. I managed their databases and incorporated JavaScript into their SPAs.</li>
                                <li>• I debugged the code of more than 10 PHP templates in WordPress.</li>
                            </ul>
                        </div>
                    </a>
                </article>
            </li>

            <li>
                <article className="work-timeline-element lg:hover:animate-microzoom transition-all bg-black hover:bg-zinc-800 hover:shadow-xl rounded-lg p-6 my-6">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">
                        <div className="work-container flex flex-col w-full">
                            <div className="date-and-name flex flex-col xlg:flex-row justify-center xlg:justify-between justify-items-center items-center xlg:items-end content-end">
                                <h3 className="font-bold text-md sm:text-lg text-red-700">Social Media Assessor</h3>
                                <time dateTime="" className="italic font-light my-1 xlg:my-0">Mar, 2020 – Oct, 2020</time>
                            </div>
                            <h4 className="text-sm font-semibold date-and-name flex flex-col xlg:flex-row justify-center xlg:justify-between justify-items-center items-center xlg:items-end content-end">Lionbridge Spain S.L.</h4>
                            <hr className="my-3"/>
                            <ul>
                                <li className="mb-2">• I performed content optimization tasks with rates above 85% effectiveness.</li>
                                <li>• I promoted an improvement to the webinar system by optimizing the content rating tools and simplifying the interface by 25%.</li>
                            </ul>
                        </div>
                    </a>
                </article>
            </li>

            <li>
                <article className="work-timeline-element lg:hover:animate-microzoom transition-all bg-black hover:bg-zinc-800 hover:shadow-xl rounded-lg p-6">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">
                        <div className="work-container flex flex-col w-full">
                            <div className="date-and-name flex flex-col xlg:flex-row justify-center xlg:justify-between justify-items-center items-center xlg:items-end content-end">
                                <h3 className="font-bold text-md sm:text-lg text-red-700">Multimedia Developer</h3>
                                <time dateTime="" className="italic font-light my-1 xlg:my-0">Jun, 2018 – May, 2020</time>
                            </div>
                            <h4 className="text-sm font-semibold date-and-name flex flex-col xlg:flex-row justify-center xlg:justify-between justify-items-center items-center xlg:items-end content-end">The Three Dragons S.L.</h4>
                            <hr className="my-3"/>
                            <ul>
                                <li className="mb-2">• I supervised the digital business strategy of more than 8 clients and boosted the online reputation through the creation of SPA websites.</li>
                                <li>• I developed 20+ multimedia products in different formats for B2C companies and private customers.</li>
                            </ul>
                        </div>
                    </a>
                </article>
            </li>
        </ul>

        <div className='buttons-more flex flex-row justify-evenly justify-items-center content-center items-center self-center my-6'>
            <div className='button-more-experience flex justify-center justify-items-center content-center items-center self-center font-normal text-center bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 w-48'>
            <button><a href='https://www.linkedin.com/in/pelayo-trives-pozuelo/details/experience/'>More experience</a></button>
            </div>

            <div className='button-more-education flex justify-center justify-items-center content-center items-center self-center font-normal text-center bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 w-48'>
            <button><a href="https://www.linkedin.com/in/pelayo-trives-pozuelo/details/education/" rel='noreferrer' target={"_blank"}>More education</a></button>
            </div>
        </div>

      </div>

      <a className='flex justify-center justify-items-center items-center content-center self-center animate-bounce w-3/6 mb-6' href="#projects"><Indicator/></a>

    </div>
  );
}

export default About;
