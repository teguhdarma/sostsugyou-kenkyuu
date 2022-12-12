import styles from '../styles/Home.module.css';
export default function Home() {
  const Options = {
    method: 'GET',
    headers: {
      Key: 'MjAyMi8xMi8wOSAwNDoyNjoxMTUwMjg5MTU1LWFhNmQtNDVlNS05ZGI4LTIxOTdiZDdmYTllZQ== ',
    },
  };

  fetch(
    'https://quake.one/api/list.json?filter=hypocenter&value=%E7%86%8A%E6%9C%AC%E7%9C%8C%E7%86%8A%E6%9C%AC%E5%9C%B0%E6%96%B9&limit=100',
    Options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return <div></div>;
}
