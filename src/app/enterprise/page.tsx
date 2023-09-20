import Hero from "@/components/Hero";
import Container from "@/containers/BaseContainer";
import getAllUsers from "@/api/users";
import Card from "@/components/TestimonyCard";

export default async function Payments() {
  const data = await getAllUsers();
  const users = data?.users;
  return (
    <>
      <Hero
        title="Capacitamos al mejor talento tech de LATAM"
        description="Encuentra los mejores desarrolladores o data scientists para tu empresa o entrena a tu equipo en las últimas tecnologías."
        subTitle=""
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
