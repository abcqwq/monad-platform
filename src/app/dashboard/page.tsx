import Layout from '@/components/dashboard/Layout';
import Header from '@/components/dashboard/Header';
import Body from '@/components/dashboard/Body';

import { query as UserProfileQuery } from '@/network/api/get-user-profile-v1';
import { UserProfileProvider } from '@/providers/UserProfileProvider';

const Page = async () => {
  const userProfile = await UserProfileQuery('abcqwq');

  return (
    <UserProfileProvider data={userProfile}>
      <Layout>
        <Header />
        <Body />
      </Layout>
    </UserProfileProvider>
  );
};

export default Page;
