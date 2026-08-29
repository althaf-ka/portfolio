import { Container } from "@/components/common/container";

import { ProfileHeader } from "./_components/profile-header";
import { Stack } from "./_components/stack";

export default function Home() {
  return (
    <Container>
      <ProfileHeader />
      <Stack />
    </Container>
  );
}
