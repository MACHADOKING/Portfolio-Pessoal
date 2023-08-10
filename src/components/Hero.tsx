import { HiDownload } from "react-icons/hi";
import img from "../assets/JM_fundo_transparente.png";

export function Hero() {
  return (
    <section className=" rounded-br-[80px] bg-gradient-to-tr from-black to-blue-900 text-white md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl text-center md:text-left">
              Olá, me chamo
            </span>
            <span className="mr-2 font-headline text-5xl font-semibold">
              Júlio
            </span>
            <span className="font-headline text-5xl font-light text-blue-400">
              Machado
            </span>
          </h1>

          <h2 className="mb-6 font-semibold flex items-center gap-2 text-center md:justify-start">
            <div className="h-1 w-12 rounded-full bg-blue-800" />
            Desenvolvedor Fullstack - React e Node.js
          </h2>

          <p className="text-gray-400 my-6 text-center md:text-left">
            Fluente em <b>Javascript</b>, me considero{" "}
            <b>desenvolvedor Júnior</b>, com <u>mais prática em front-end</u> e
            uma especialização em React e Node. <br></br>
            <br></br>Apaixonado em desenvolver soluções de software eficientes e
            interativas.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <a
              href="https://wa.me/5511971572640"
              target="_blank"
              className="underline font-bold text-white"
            >
              Fale Comigo
            </a>
            <span className="italic text-gray-500">ou</span>
            <a
              href="https://drive.google.com/file/d/1vCcofGEnRnFmgSvvgs54gFa2anatjqWf/view?usp=sharing"
              target="_blank"
              className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>
        <div className="basis-1/2 mt-1.5 sm:m-0">
          <img src={img} />
        </div>
      </div>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-700 to blue-600 md:w-1/3" />
    </section>
  );
}
