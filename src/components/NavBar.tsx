import { navLinks } from "../constants";

const NavBar = () => {
  const handleNavClick = (label: string) => {
    // Scroll to section if available, otherwise just a placeholder
    const element = document.getElementById(label.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" className="cursor-pointer" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(label);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button aria-label="Search">
            <img src="/search.svg" alt="Search" />
          </button>
          <button aria-label="Shopping cart">
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
