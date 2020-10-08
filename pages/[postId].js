import React from "react";
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

BlogPost.getInitialProps = async({req, query})=>{
  console.log(query);
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return{ post: json.post};
}

export default function BlogPost({post}) {
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

     
      <Card bg ="dark"
      text={'white'}
      className="mb-2">
        <Card.Header as="h5">{post.owner}</Card.Header>
        <Card.Img variant="top" src={post.imageUrl} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
          {post.details}
    </Card.Text>
    <Card.Text className={styles.date}>
          {post.date}
    </Card.Text>
        
        </Card.Body>
      </Card>

    </div>

  );

}

