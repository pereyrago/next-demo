import Image from "next/image";
import s from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.ul}>
        <li className={s.li}>
          <Link href="/">
            <Image
              className={s.img}
              width="130"
              height="35"
              src="https://assets.soyhenry.com/logos/LOGO-HENRY-04_w.png"
              alt="logo-icon"
            />
          </Link>
        </li>
        <li>
          <Link href="/careers">Carreras</Link>
        </li>
        <li>
          <Link href="/payments">Planes de Pago</Link>
        </li>
        <li>
          <Link href="/enterprise">Empresas</Link>
        </li>
      </ul>
    </nav>
  );
}
