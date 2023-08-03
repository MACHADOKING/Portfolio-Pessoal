import { HiAcademicCap } from "react-icons/hi";
import { HiCodeBracketSquare } from "react-icons/hi2";

export function Skills() {
  const educations = [
    {
      name: "Bacharelado Engenharia de Software | Unicesumar - Em andamento",
    },
    {
      name: "Curso de Fullstack Developer | Danki Code",
    },
    {
      name: "Javascript do básico ao avançado (c/ Node.js e projetos)",
    },
    {
      name: "React do Zero a Maestria (c/ hooks, router, API, Projetos) | Matheus Battisti Udemy",
    },
    {
      name: "Curso de React.Js e Next.Js (Intermediário e Avançado) | Udemy - Iniciado",
    },
    {
      name: "Node.js do Zero a Maestria com diversos Projetos | Matheus Battisti Udemy - Em andamento",
    },
    {
      name: "TypeScript do básico ao avançado (c/ React, Express) | Matheus Battisti Udemy - Iniciado",
    },
    {
      name: "React Native: Desenvolva APPs Nativas para Android e IOS | Cod3r Cursos Online Udemy - Iniciado",
    },
  ];

  const skills = [
    {
      name: "HTML5/CSS3",
      icon: "images/html.svg",
      level: 95,
    },
    {
      name: "JavaScript",
      icon: "images/javascript.svg",
      level: 90,
    },
    {
      name: "Typescript",
      icon: "images/typescript.svg",
      level: 35,
    },
    {
      name: "React.js",
      icon: "images/react.svg",
      level: 85,
    },
    {
      name: "Node.js",
      icon: "images/nodejs.svg",
      level: 65,
    },
    {
      name: "Next.js",
      icon: "images/nextjs.svg",
      level: 15,
    },
  ];

  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <p className="relative text-sm text-gray-700">
            Front-end Developer | React.js | React Native | Node.js | Typescript
            | Javascript
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded bg-blue-400/10" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
              >
                {education.name}
              </div>
            ))}
          </div>

          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10 rounded"
                    />
                  </div>
                  <div className="w-full flex-grow">
                    <h4 className="font-headline text-gray-900">
                      {skill.name}
                    </h4>
                    <div className="h-2.5 w-full rounded-full bg-white">
                      <div
                        className="h-2.5 rounded-full bg-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
