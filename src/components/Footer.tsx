import { footerLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966.
        </p>
        <img src="/logo.svg" alt="Apple logo" className="cursor-pointer" />
      </div>

      <hr />

      <div className="links">
        <p>
          &copy; © {new Date().getFullYear()}. All rights reserved
          "Ahmadreza16".
        </p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
