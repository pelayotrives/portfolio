import React from "react";
import Indicator from "./Indicator";
import { Accordion } from "flowbite-react";

export default function FAQ() {
  return (
    <div
      id="faq"
      className="about flex flex-col justify-evenly justify-items-center items-center content-center self-center bg-zinc-800"
    >
      <div className="accordion w-4/6 md:w-3/6">
        <div
          id="skills-content-title"
          className="skills-content-title flex flex-col justify-center justify-items-center content-center items-center self-center"
        >
          <h2 className="projects-title text-4xl sm:text-5xl xmd:text-6xl font-bold mt-6 mb-1">
            FAQ
          </h2>
        </div>
        <Accordion flush={true} alwaysOpen={true}>
          <Accordion.Panel>
            <p className="hover:animate-pulse"><Accordion.Title>1. What is your educational level?</Accordion.Title></p>
            <Accordion.Content>
              <p className="mb-2 text-gray-500">
                I have a degree in{" "}
                <span className="font-semibold text-red-700">Multimedia</span>{" "}
                from the Universitat Oberta de Catalunya and a HND degree in{" "}
                <span className="font-semibold text-red-700">
                  Creative Media Production
                </span>{" "}
                from C.E.V Madrid. I have studied different postgraduate degrees
                specialized in{" "}
                <span className="font-semibold text-red-700">
                  Project Management
                </span>
                , <span className="font-semibold text-red-700">R&D</span>,{" "}
                <span className="font-semibold text-red-700">Marketing</span>{" "}
                and, above all,{" "}
                <span className="font-semibold text-red-700">Programming</span>.
                In addition, I study autonomously on a daily basis to enrich my
                knowledge in various fields, such as programming, design,
                digital strategy and many others.
              </p>

              <p className="text-gray-500 hidden md:block">
                You can consult in more detail all the studies I have completed
                in my{" "}
                <a
                  className="font-semibold text-red-700 hover:underline hover:underline-offset-2"
                  href="https://www.linkedin.com/in/pelayo-trives-pozuelo/"
                >
                  LinkedIn profile
                </a>
                . If you have any additional questions, I will be happy to
                connect with you.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <p className="hover:animate-pulse"><Accordion.Title>
              2. Have you been programming for long?
            </Accordion.Title></p>
            <Accordion.Content>
              <p className="mb-2 text-gray-500">
                Indeed! I started programming in 2018 small exercises in{" "}
                <span className="font-semibold text-red-700">HTML5</span>,
                <span className="font-semibold text-red-700"> CSS3</span> and{" "}
                <span className="font-semibold text-red-700">PHP7</span> during
                my degree, in addition to using{" "}
                <span className="font-semibold text-red-700">Processing </span>
                and <span className="font-semibold text-red-700">Arduino</span>.
                Later, I learned{" "}
                <span className="font-semibold text-red-700">SQL</span> and{" "}
                <span className="font-semibold text-red-700">JavaScript</span>.
                However, where I feel most comfortable now is in{" "}
                <span className="font-semibold text-red-700">
                  JavaScript (ES6)
                </span>{" "}
                and{" "}
                <span className="font-semibold text-red-700">MERN Stack</span>.
                Currently, I am learning{" "}
                <span className="font-semibold text-red-700">Swift</span>.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <p className="hover:animate-pulse"><Accordion.Title>3. Do you have other skills?</Accordion.Title></p>
            <Accordion.Content>
              <p className="mb-2 text-gray-500">
                I have an extensive background in other areas of work such as{" "}
                <span className="font-semibold text-red-700">design</span>,{" "}
                <span className="font-semibold text-red-700">UX-UI</span>,{" "}
                <span className="font-semibold text-red-700">
                  digital strategy
                </span>
                ,{" "}
                <span className="font-semibold text-red-700">
                  multimedia development
                </span>{" "}
                and{" "}
                <span className="font-semibold text-red-700">
                  digital marketing
                </span>
                . Together with programming, they allow me to have a
                multidisciplinary profile very capable of managing different
                situations at work.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <p className="hover:animate-pulse"><Accordion.Title>4. Any hobbies?</Accordion.Title></p>
            <Accordion.Content>
              <p className="mb-2 text-gray-500">
                I'm passionate about <span className="text-red-700 font-semibold">music</span> and <span className="text-red-700 font-semibold">travel</span>, plus I'm a comic book
                fanatic - I don't just talk about coding! Why don't we grab{" "}
                <span className="text-red-700 font-semibold">a coffee</span> and check it out? 😊
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
          <p className="hover:animate-pulse"><Accordion.Title>5. How can I contact you?</Accordion.Title></p>
            <Accordion.Content>
              <p className="mb-2 text-gray-500">
                In the contact form below, through my{" "}
                <a
                  className="font-semibold text-red-700 hover:underline hover:underline-offset-2"
                  href="https://www.linkedin.com/in/pelayo-trives-pozuelo/"
                >
                  LinkedIn profile
                </a>
                , by{" "}
                <a
                  className="font-semibold text-red-700 hover:underline hover:underline-offset-2"
                  href="mailto:pelayotrivespozuelo@gmail.com"
                >
                  email
                </a>{" "}
                or via{" "}
                <a
                  className="font-semibold text-red-700 hover:underline hover:underline-offset-2"
                  href="https://wa.me/+34686115314?text=Portfolio%20|%20Quick%20Chat"
                >
                  WhatsApp
                </a>
                .
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <a
        className="flex justify-center justify-items-center items-center content-center self-center animate-bounce w-3/6 my-6"
        href="#contact"
      >
        <Indicator />
      </a>
    </div>
  );
}
