import React from 'react';
import clsx from 'clsx';
import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Fair',
    imageUrl: 'img/fair_pink.svg',
    description: (
      <>
        95% of newly issued coins go directly to users via the permissionless,
        free-market mining process, a proccess open to anyone in the world with a GPU and an
        internet connection.
      </>
    ),
  },
  {
    title: 'Fast',
    imageUrl: 'img/fast_pink.svg',
    description: (
      <>
        No need for trips to the bank or ATM. Your Ycash is always at your
        fingertips, 24 hours a day, 365 days a year. Send Ycash to anyone on the
        planet within minutes.
      </>
    ),
  },
  {
    title: 'Fun',
    imageUrl: 'img/fun_pink.svg',
    description: (
      <>
        Borderless, inflation-free cash is empowering and fun! You will love
        earning, saving, and spending your Ycash.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                className={styles.heroLogo}
                src={useBaseUrl('/img/Ycash_accepted_here_transparent.svg')}
              />
              <span
                className={styles.heroTitleTextHtml}
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: 'homepage.hero.title',
                    message:
                      'Ycash is the future of cash',
                    description:
                      'Home page hero title, can contain simple html tags',
                  }),
                }}
              />
            </h1>
            <h2 className={styles.heroProjectSubTagline}>
              Ycash is a digital currency focused on empowering local and online communities around the globe.
            </h2>
            <div className={styles.indexCtas}>
              <Link className="button button--primary" to="/wallets">
                <Translate>Get a Ycash Wallet</Translate>
              </Link>
              <Link
                className="button button--info"
                to="/get-ycash">
                <Translate>Buy Ycash</Translate>
              </Link>
            </div>
          </div>
        </div>
        <div className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            <Translate
              values={{
                wryLink: (
                  <Link to="/wry">
                    <Translate>Wry</Translate>
                  </Link>
                ),
              }}>
              {`Ycash is now DeFi-enabled! Introducing {wryLink}`}
            </Translate>
            .
          </div>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
