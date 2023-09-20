import Hero from "@/components/Hero";
import Container from "@/containers/BaseContainer";
import getAllUsers from "@/api/users";
import Card from "@/components/TestimonyCard";

export default async function Home() {
  const data = await getAllUsers();
  const users = data?.users;
  return (
    <>
      <Hero
        title="Conviértete en un Full Stack Developer"
        subTitle=""
        description="Un programa intensivo en línea que simula un entorno de trabajo real y te prepara para una carrera exitosa como desarrollador Full Stack."
      />
      <Container title="Testimonios">
        <>
          {users?.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </>
      </Container>
    </>
  );
}
