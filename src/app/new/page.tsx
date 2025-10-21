import Layout from '@/components/new/Layout';
import Header from '@/components/new/Header';
import Body from '@/components/new/Body';

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
