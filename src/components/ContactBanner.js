import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>If you find my profile interesting </PText>
          <h3 className="contactBanner__heading">Please Contact me</h3>
          <Button
            variant="contained"
            color="primary"
            target="_blank"
            rel="noreferrer"
            href="mailto:shanmukhchowdary147@gmail.com"
          >
            Mail Me
          </Button>
        </div>
      </div>
    </ContactBannerStyles>
  );
}
