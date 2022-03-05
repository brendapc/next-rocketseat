import {GetServerSideProps, GetStaticProps} from "next";

export default function Home({repositories, date}: any) {
  return (
    <>
      <h1>{date}</h1>
      <ul>
        <h1>hello world</h1>
        {repositories.map((repo: any) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://api.github.com/users/brendapc/repos");
  const data = await response.json();
  const repositoryNames = data.map((item: any) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 5 // every 5 minutes, the page provided when a user access the endpoint will be updated
  };
};
