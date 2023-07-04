function App() {
  return (
    <header className=" bg-stone-700 ">
      {/* logo */}
      {/* <!-- nav bar --> */}
      <nav className="flex sm:justify-center  space-x-4">
        {[
          ["Sign-up", "/sign-up"],
          ["Home", "/home"],
          ["User", "/user"],
          ["Products", "/products"],
          ["Logistics", "/logistics"],
          ["Reports", "/reports"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-2 py-3 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default App;
