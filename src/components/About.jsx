import React from "react";
import Indicator from "./Indicator";

function About() {
  return (
    <div id="about" className="about flex flex-col justify-evenly justify-items-center items-center content-center self-center bg-zinc-900">

      <div className="about-container w-3/6">

        <div className="about-title overflow-hidden h-20 my-6">
          <div className="about-title-wrapper text-center animate-alternate h-full">
            <h2 className="about-title-item-one text-6xl font-bold">About me...</h2><br />
            <h2 className="about-title-item-two text-6xl font-bold">...and more <span className="text-responsive">stuff.</span></h2><br />
          </div>
        </div>

        <div className="about-content mb-6">
          <p className="text-justify">Programming has always been my passion. I started with{" "}<span className="font-bold">PHP</span> during my university studies while improving my{" "}<span className="font-bold text-red-700">digital marketing</span>,{" "}<span className="font-bold text-red-700">design</span> and{" "}<span className="font-bold text-red-700">UX/UI design</span> skills.{" "}<span className="text-responsive">{" "}Little by little, I gained confidence and attended Ironhack's web development bootcamp, where my vision of programming changed and my skills improved a lot.</span> I became fluent in{" "}<span className="font-bold text-red-700">MERN Stack</span> as well as{" "}<span className="font-bold text-red-700">semantic HTML, CSS</span>{" "}and other tools like{" "}<span className="font-bold text-red-700">WordPress</span>. I have found in{" "}<span className="font-bold text-red-700">JavaScript</span> my ideal partner, and every day I try to improve little by little. Do you want to see how?</p>
        </div>

        <ul className="work-timeline">
            <li>
                <article className="work-timeline-element lg:hover:animate-microzoom transition-all bg-black hover:bg-zinc-800 hover:shadow-xl rounded-lg p-6">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">
                        <div className="info-container flex flex-row">
                            <time dateTime="" className="w-1/6">Jul, 2021 – <br/>Jan, 2022</time>
                            <div className="work-container flex flex-col w-5/6">
                                <h3 className="font-bold"> <span className="text-red-700">SEM & SEO Specialist</span> &nbsp; | &nbsp; 123 Innovation Group S.L. (Einnova)</h3>
                                <hr className="my-3"/>
                                <ul>
                                    <li>• I optimized the campaign budget of 5 clients by 50% with an increase in ROI improvement of 15%. I managed their databases and incorporated JavaScript into their SPAs.</li>
                                    <li>• I debugged the code of more than 10 PHP templates in WordPress.</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </article>
            </li>

            <li>
                <article className="work-timeline-element lg:hover:animate-microzoom transition-all bg-black hover:bg-zinc-800 hover:shadow-xl rounded-lg p-6 my-6">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">
                        <div className="info-container flex flex-row">
                            <time dateTime="" className="w-1/6">Mar, 2020 – <br/>Oct, 2020</time>
                            <div className="work-container flex flex-col w-5/6">
                                <h3 className="font-bold"> <span className="text-red-700">Social Media Assessor</span> &nbsp; | &nbsp; Lionbridge</h3>
                                <hr className="my-3"/>
                                <ul>
                                    <li>• I performed content optimization tasks with rates above 85% effectiveness.</li>
                                    <li>• I promoted an improvement to the webinar system by optimizing the content rating tools and simplifying the interface by 25%.</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </article>
            </li>

            <li>
                <article className="work-timeline-element lg:hover:animate-microzoom transition-all bg-black hover:bg-zinc-800 hover:shadow-xl rounded-lg p-6">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">
                        <div className="info-container flex flex-row">
                            <time dateTime="" className="w-1/6">Jun, 2018 – <br/>May, 2020</time>
                            <div className="work-container flex flex-col w-5/6">
                                <h3 className="font-bold"> <span className="text-red-700">Multimedia Developer</span> &nbsp; | &nbsp; The Three Dragons Ltd.</h3>
                                <hr className="my-3"/>
                                <ul>
                                    <li>• I supervised the digital business strategy of more than 8 clients and boosted the online reputation through the creation of SPA websites.</li>
                                    <li>• I developed 20+ multimedia products in different formats for B2C companies and private customers.</li>
                                </ul>
                            </div>
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
