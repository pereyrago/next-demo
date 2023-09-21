import Hero from "@/components/Hero";
import Container from "@/containers/BaseContainer";
import getAllUsers from "@/api/users";
import Card from "@/components/TestimonyCard";
import Timer from "@/components/Timer";
import s from "./page.module.css";

export default async function Home() {
  const data = await getAllUsers();
  const users = data?.users;
  return (
    <>
      <Hero
        title="Invertimos en tu educación"
        subTitle="Comienza a estudiar Desarrollo Full Stack o Data Science"
        description="Despega tu carrera en tecnología. Estudia a remoto y de manera intensiva. ¿Y lo mejor? Solo nos pagas cuando consigues un nuevo trabajo."
      />
      <Container title="Testimonios">
        <>
          {users?.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </>
      </Container>
      <Container title="TIMER">
        <span className={s.timer_text}>
          JS se corrió por <Timer /> segundos
        </span>
      </Container>
    </>
  );
}
