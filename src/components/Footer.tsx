import { footer } from "../data/story";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <p>{footer.text}</p>
    </footer>
  );
}
