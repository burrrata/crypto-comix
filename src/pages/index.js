import React, { Fragment } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { Container, Row, Col, Button } from 'reactstrap';

import styles from './styles.module.css';

const features = [
  {
    title: "Cool Memes!",
    imageUrl: 'img/pow.png',
    description: (
      <Fragment>
        Did you see the memes? They're really cool. You're welcome.
      </Fragment>
    ),
  },
  {
    title: "A Cooperative DAO",
    imageUrl: 'img/ugh.png',
    description: (
      <Fragment>
        Cooperatives and DAOs have a lot in common. So much so that we were able to fuse them into one. Behold, the CAO: a Cooperative Autonomous Organization!
      </Fragment>
    ),
  },
  {
    title: "Probably compliant in Wyoming",
    imageUrl: 'img/wow.png',
    description: (
      <Fragment>
        Along with deploying the DAO on the blockchain, you'll also be able to deploy a cooperative in Wyoming.
      </Fragment>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Col sm={12} md={4} className={classnames(styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </Col>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Crypto Comix!`}
      description="Crypto Comix is the world's first local comic shop run by a DAO.<head />">
      <header className={classnames('hero hero--primary hero--dark', styles.heroBanner)}>
        <Container>
          <Row>
            <Col xs="6" className="p-2">
              <img className="hero--image" src={useBaseUrl("/img/Hero-Image.png")} />
            </Col>
            <Col xs="6" className="p-2">
              <h1 className="pt-5 pb-2 pl-2 hero__title">A comic shop cooperative.</h1>
              <p className="pt-2 pb-2 pl-2 hero__subtitle">Crypto Comix is the worlds first DAOified comic cooperative run by and for members.</p>
              <div className="pt-2">
                <div className={styles.buttons}>
                  <Button
                    tag={Link}
                    outline color="light"
                    size="lg"
                    className={classnames(
                      `mr-2`,
                      styles.getStarted,
                    )}
                    to={useBaseUrl('docs/')}>
                    Learn about CryptoComix
                </Button>
                  <Button
                    tag={Link}
                    outline color="light"
                    size="lg"
                    className={classnames(
                      `ml-2`,
                      styles.getStarted,
                    )}
                    to={useBaseUrl('docs/doc6')}>
                    Build your own!
                </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        ß
        {features && features.length > 0 && (
          <section className={styles.features}>
            <Container>
              <Row className="pb-2">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </Row>
            </Container>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
