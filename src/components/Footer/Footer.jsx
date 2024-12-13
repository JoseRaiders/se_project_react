import "./Footer.css";

function Footer() {
  const currentYear = new Date().toLocaleString("default", {
    year: "numeric",
  });

  return (
    <footer className="footer">
      <p className="footer__copyright">Developed by Anuska Jose</p>
      <p className="footer__year">{currentYear}</p>
    </footer>
  );
}

export default Footer;
