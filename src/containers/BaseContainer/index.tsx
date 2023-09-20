import s from "./container.module.css";
export default function Container({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) {
  return (
    <section className={s.section}>
      <h2 className={s.h2}>{title}</h2>
      <div className={s.div}>{children}</div>
    </section>
  );
}
