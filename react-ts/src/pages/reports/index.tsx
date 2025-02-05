import type { NextPage } from 'next';
import Head from 'next/head';
import { useAuth } from 'src/hooks/use-auth';
import Name from 'src/components/reports/Name';
import Email from 'src/components/reports/Email';

const Home: NextPage = () => {
  const { user } = useAuth();

  const handleClick = (name: string): string => {
    return `${name} clicked !`;
  };

  return (
    <>
      <Head>
        <title>Reports</title>
      </Head>
      <br />
      You are logged in !
      <br />
      <br />
      <Name name={user.name} />
      <Email email={user.email} handleClick={handleClick} />
    </>
  );
};

export default Home;
