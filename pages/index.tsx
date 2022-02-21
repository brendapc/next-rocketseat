import {GetServerSideProps} from "next";

export default function Home({repositories}) {
  console.log(repositories);
  return (
    <ul>
      <h1>hello world</h1>
      {repositories.map((repo: any) => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://api.github.com/users/brendapc/repos");
  const data = await response.json();
  const repositoryNames = data.map((item: any) => item.name);

  return {
    props: {
      repositories: repositoryNames,
    },
  };
};
