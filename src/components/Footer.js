import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Shanmukh Chowdary</h1>
          <PText>
            A freelance web designer and developer from Chittagong, Bangladesh.
            I always make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'shanmukhchowdary147@gmail.com',
                path: 'mailto:shanmukhchowdary147@gmail.com',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social media Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/shanmukhchowdary147/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/shanmukhchowdary147',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/___shannu.___/',
              },
            ]}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </FooterStyle>
  );
}
