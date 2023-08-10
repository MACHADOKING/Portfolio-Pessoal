import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import img from "../assets/Reactgram-Mockup.png";
import secret from "../assets/Secretword-Mockup.png";
import blog from "../assets/Miniblog-Mockup.png";
import janetflix from "../assets/Janetflix-Mockup.png";
import todolist from "../assets/Todolist-Mockup.png";

export function Projects() {
  const projects = [
    {
      title: "Reactgram",
      description:
        "App Fullstack - Uma 'réplica' do aplicativo Instagram, onde eu quis fazer as funcionalidades principais do app. | Feito em React e Nodejs",
      image: `${img}`,
      link: "https://reactgram-fullstack.vercel.app/",
      colSpan: "col-span-1",
    },
    {
      title: "Secret Word",
      description:
        "Um jogo de adivinhar qual é a palavra, inserindo letra por letra com direito a apenas uma dica. | Feito em React",
      image: `${secret}`,
      link: "https://secret-word-silk.vercel.app/",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Mini-Blog",
      description:
        "Um website do estilo blog, com as funcionalidades de fazer posts e comentários. | Feito em React e Firebase",
      image: `${blog}`,
      link: "https://machadoking.github.io/mini-blog/",
      colSpan: "col-span-1",
    },
    {
      title: "Reactflix",
      description:
        "Um clone da página principal do Aplicativo Netflix, onde através de uma manipulação de API foi puxado dados como títulos, descrições, etc.. de filmes. | Feito em React",
      image: `${janetflix}`,
      link: "https://netflixclone-machadoking.vercel.app/",
      colSpan: "col-span-1",
    },
    {
      title: "Lista de Tarefas",
      description:
        "Um app web de lista de tarefas feito em Vanilla Javascript, utilizando o localstorage para armazenar suas tasks.",
      image: `${todolist}`,
      link: "https://machadoking.github.io/To-do-list-js/",
      colSpan: "col-span-1",
    },
  ];

  return (
    <section>
      <div className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded bg-blue-400/10" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={`project-${index}`}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute indet-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm p-3">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </section>
  );
}
