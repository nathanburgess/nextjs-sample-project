import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import { ProvidersMap } from '@constants/ProvidersMap';
import { Button } from 'rebass';

type Provider = {
  name: string;
  id: string;
};

export default function SignIn({ providers }: { providers: Array<Provider> }) {
  return (
    <>
      {providers &&
        Object.values(providers).map((provider: Provider) => {
          return (
            <div key={provider.name}>
              <Button onClick={() => signIn(provider.id)}>
                <Image
                  alt={`The icon for ${provider.name}`}
                  height={50}
                  src={ProvidersMap[provider.id].icon}
                  width="100%"
                />
                <span>Sign in with {provider.name}</span>
              </Button>
            </div>
          );
        })}
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}
