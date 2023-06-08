export function Footer() {
  return (
    <footer className=" bg-gradient-to-tl from-black to-blue-700 text-white ">
      <div className="container mx-auto flex max-w-4xl p-4 text-sm ">
        <p className="flex-grow">
          &copy; {new Date().getFullYear()} &middot; Todos os direitos
          reservados.
        </p>
        <ul className="flex flex-nowrap gap-2">
          <li>
            <a href="#">Termos de uso</a>
          </li>
          <li className="text-gray-500">&middot;</li>
          <li>
            <a href="#">Política de privacidade</a>
          </li>
        </ul>
      </div>
      <div className="absolute left-0 -mt-12 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-900 to blue-600 md:w-1/3" />
    </footer>
  );
}
