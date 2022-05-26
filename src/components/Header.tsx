import { signIn, signOut, useSession } from 'next-auth/react';

export const Header = () => {
  const { data: session } = useSession();

  return (
    <header>
      <div>
        <p>
          {!session && (
            <>
              <span>You are not signed in</span>
              <a
                href={`/api/auth/signin`}
                onClick={e => {
                  e.preventDefault();
                  signIn().then();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span style={{ backgroundImage: `url('${session.user.image}')` }} />
              )}
              <span>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                onClick={e => {
                  e.preventDefault();
                  signOut().then();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  );
};
