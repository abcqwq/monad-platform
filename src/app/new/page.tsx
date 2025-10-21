import Layout from '@/components/new/Layout';
import Header from '@/components/new/Header';
import Body from '@/components/new/Body';

import { query as fetchDeployables } from '@/network/api/get-deployables-v1';
import { query as UserProfileQuery } from '@/network/api/get-user-profile-v1';
import { UserProfileProvider } from '@/providers/UserProfileProvider';
import { DeployablesProvider } from '@/providers/DeployablesProvider';

const Page = async () => {
  const deployables = await fetchDeployables();
  const userProfile = await UserProfileQuery('abcqwq');

  return (
    <UserProfileProvider data={userProfile}>
      <DeployablesProvider data={deployables}>
        <Layout>
          <Header />
          <Body />
        </Layout>
      </DeployablesProvider>
    </UserProfileProvider>
  );
};

export default Page;
