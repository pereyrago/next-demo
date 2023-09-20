import { User } from "@/api/users";
import Image from "next/image";
import s from "./testimony.module.css";

export default function Card({ user }: { user: User }) {
  return (
    <article className={s.article}>
      <p className={s.p}>{`${user.firstName} ${user.lastName}`}</p>
      <Image width={250} height={250} src={user.image} alt={user.firstName} />
    </article>
  );
}
