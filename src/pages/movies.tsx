import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useState, useEffect } from 'react';

import styles from './movies.module.css';

export default function Home(): JSX.Element {
  const [movie, setMovie] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey=aafd6f2d"
    ).then((response) => response.json());

    setMovie(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

return (
    <Layout>
      <main className={styles.main}>
          {movie &&
            <div className={styles.moviePoster}>
                <img src={movie.Poster} alt={movie.Title} className={styles.poster}/>
                <div>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Plot}</p>
                </div>
            </div>
          }
      </main>
    </Layout>
  );
}
