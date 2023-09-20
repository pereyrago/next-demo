import Image from "next/image";
import s from "./hero.module.css";

interface Props {
  title?: string;
  subTitle?: string;
  description?: string;
  button?: string;
}

export default function Hero(props: Props) {
  const {
    title = "Invertimos en tu educación",
    subTitle = "Comienza a estudiar Desarrollo Full Stack o Data Science",
    description = "Despega tu carrera en tecnología. Estudia a remoto y de manera intensiva. ¿Y lo mejor? Solo nos pagas cuando consigues un nuevo trabajo.",
    button = "Aplicar",
  } = props;
  return (
    <section className={s.section}>
      <main className={s.main}>
        <h1>{title}</h1>
        <h3 className={s.h3}>{subTitle}</h3>
        <p className={s.p}>{description}</p>
        <button className={s.button}>{button}</button>
      </main>
      <aside className={s.main}>
        <Image
          className={s.img}
          height={550}
          width={500}
          objectFit="cover"
          src="https://assets.soyhenry.com/henry-landing/assets/PrincipalSection/homepage-hero.jpg"
          alt="hero"
        />
      </aside>
    </section>
  );
}
