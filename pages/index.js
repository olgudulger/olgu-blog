import React from "react";
import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


Home.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/api/posts')
  const json = await res.json()
  return { posts: json.posts }
}
export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <h1 className="hero-title">Olgu DULGER</h1>
        <div className="links">
          <Link href="https://www.instagram.com/olgudlg/">
            <a className={styles.link}>Instagram</a>
          </Link>
          <Link href="https://www.linkedin.com/in/olgu-d%C3%BClger-5895a793/">
            <a className={styles.link}>LinkedIn</a>
          </Link>
        </div>
      </div>
      
      {posts.map(post => (
      <Card bg ="dark"
      text={'white'}
      className="mb-2"y >
        <Card.Header as="h5">{post.owner}</Card.Header>
        <Card.Img variant="top" src={post.imageUrl} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text  className={styles.text} >
          {post.details}
    </Card.Text >
    <Card.Text  className={styles.date}>
          {post.date}
    </Card.Text>
          <Button class="btn btn-primary  float-right" variant="dark" href={post.slug} variant="primary">Devamı..</Button>
        </Card.Body>
      </Card>
      ))
     }

    </div>

  );

}

