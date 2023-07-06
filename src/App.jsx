import "./index.css";
import { FaYoutube } from "react-icons/fa";

function App() {
  return (
    <header className="navbar bg-stone-700 font-mono">
      {/* logo */}
      <article className="logo">
        <h3>
          <span>jake</span>plug
        </h3>
      </article>
      {/* <!-- nav bar --> */}
      <nav className="flex sm:justify-center space-x-4">
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
            className="rounded-lg px-2 py-3 text-slate-200 font-medium hover:border-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
      <div>
        <form action="" className="mx-1">
          <input
            type="search"
            className="search bg-sky-500/75 px-2 py-2"
            name="search"
            placeholder="search"
            id=""
          />
          <button
            type="search"
            className="px-1 py-2 rounded bg-cyan-500 hover:bg-cyan-600"
          >
            search
          </button>
        </form>{" "}
      </div>
    </header>
  );
}

export default App;
