import "./index.css";
export default function sign_up() {
  return (
    <section>
      <article className="sign-up ">
        <h2>sign-up</h2>
        <div className=" ">
          <form action="" className="form">
            <div className=" flex justify-center items-center ">
              <label htmlFor="name">Username:</label>
              <input
                type="text"
                className="sign-up-link"
                name="name"
                placeholder="name"
                id=""
              />
            </div>
            <div className="">
              <label htmlFor="name">Role:</label>
              <input
                type="text"
                className="sign-up-link"
                name="name"
                placeholder="buyer or seller"
                id=""
              />
            </div>
            <div className="">
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                className="sign-up-link"
                name="email"
                placeholder="mail@email"
                id=""
              />
            </div>
            <div className="">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="sign-up-link"
                placeholder="password"
                id=""
              />
            </div>
            <button
              type="submit"
              className="px-1 py-2 mt-3.5 rounded bg-cyan-500 hover:bg-cyan-600"
            >
               sign-up
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
