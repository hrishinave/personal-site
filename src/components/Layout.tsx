import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { label: "About", to: "/" },
  { label: "Research Interests", to: "/research" },
  { label: "News", to: "/news" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
];

function Layout() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-black"
                  : "text-blue-700 hover:underline"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-10 md:py-14 text-[15px] leading-relaxed">
        {/* Name */}
        <h1 className="text-3xl font-bold mb-4">Hrishikesh Naveenam</h1>

        {/* Info block with headshot floated right */}
        <div className="relative mb-6">
          <img
            src="/Hrishikesh_N_Headshot.png"
            alt="Hrishikesh Naveenam"
            className="float-right ml-6 mb-4 w-40 h-40 rounded-sm object-cover"
          />

          <p>
            Undergraduate Student<br />
            <a href="https://cs.utdallas.edu/" className="text-blue-700 hover:underline">
              Department of Computer Science
            </a><br />
            <a href="https://www.utdallas.edu/" className="text-blue-700 hover:underline">
              The University of Texas at Dallas
            </a><br />
            Email: <a href="mailto:hrishinave@gmail.com" className="text-blue-700 hover:underline">
              hrishinave@gmail.com
            </a>
          </p>

          <ul className="list-disc list-inside mt-3">
            <li>
              <a href="https://github.com/hrishinave" className="text-blue-700 hover:underline">GitHub</a>
              {' | '}
              <a href="https://www.linkedin.com/in/hrishikeshnaveenam/" className="text-blue-700 hover:underline">LinkedIn</a>
              {' | '}
              <a href="/Naveenam_Hrishikesh_CV.pdf" className="text-blue-700 hover:underline">CV</a>
            </li>
          </ul>
        </div>

        <div className="clear-both" />

        <Outlet />

        {/* Footer */}
        <hr className="mt-12 mb-4 border-gray-300" />
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hrishikesh Naveenam
        </p>
      </main>
    </div>
  );
}

export default Layout;
