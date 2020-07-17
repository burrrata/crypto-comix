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
    title: "Easy to Use",
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <Fragment>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </Fragment>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <Fragment>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </Fragment>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <Fragment>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
              <img className="hero--image" src="/img/Hero-Image.png" />
            </Col>
            <Col xs="6" className="p-2">
              <h1 className="pt-5 pb-2 pl-2 hero__title">We're a local comic shop. DAO-style.</h1>
              <p className="pt-2 pb-2 pl-2 hero__subtitle">Crypto Comix is the worlds first local comic shop run by a DAO and owned by the members.</p>
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
                    Join Juris
                </Button>
                  <Button
                    tag={Link}
                    outline color="light"
                    size="lg"
                    className={classnames(
                      `ml-2`,
                      styles.getStarted,
                    )}
                    to={useBaseUrl('help/')}>
                    Find Legal Help
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
