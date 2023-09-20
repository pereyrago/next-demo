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
        title="Educación de calidad, a tu alcance"
        description="Simple, flexible y transparente"
        subTitle=""
        button="otro boton"
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
