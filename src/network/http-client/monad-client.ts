import constructClient from '@/network/http-client/axios';
import { DefaultConfig } from '@/network/http-client/client-config';

const monadClient = constructClient({
  baseURL: process.env.MONAD_BASE_URL || DefaultConfig.baseURL
});

export default monadClient;
