// ./app/(home)/page.tsx

import { useSession } from 'next-auth/react';
import NonAuthHomeView from '@sections/nonauthhome.view';
import AuthHomeView from '@sections/authhomeview';
import Typography from '@mui/material/Typography';

export const metadata = { title: "Domov | Kutyl s.r.o." };

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    // Zobrazenie počas načítavania
    return (
      <Typography>Načítavam...</Typography>
    );
  }

  if (!session) {
    // Zobrazenie pre neregistrovaných/neprihlásených používateľov
    return <NonAuthHomeView />;
  }

  // Zobrazenie pre prihlásených používateľov
  return <AuthHomeView />;
}
