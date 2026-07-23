import Container from "@/components/common/container";
import Navbar from "@/components/common/navbar";
import ProfileHeader from "@/components/home/profile-header";

export default function Home() {
  return (
    <Container className="min-h-screen border-x pb-10">
      <Navbar />
      <ProfileHeader />
    </Container>
  );
}
