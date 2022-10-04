// @mui
import { Container, Box } from '@mui/material';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import Page from '../components/Page';
import { PATH_DASHBOARD } from '../routes/path';
import { UserCard } from '../sections/@dashboard/user/cards';
import { _userCards } from '../_mock';
// routes

// ----------------------------------------------------------------------

export default function UserCardPage() {
//   const { themeStretch } = useSettings();

  return (
    <Page title="User: Cards">
      <Container maxWidth={'lg'}>
        <HeaderBreadcrumbs
          heading="User Cards"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: 'Cards' },
          ]}
        />

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {_userCards.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}
