import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 20px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          {/* <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Shanmukh Chowdary</span>
          </h1> */}
          {/* <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div> */}
          {/* <div className="hero__info">
            <PText>
              I am working as a freelance web designer and developer for 4
              years. I love to design and make new web experiences for the
              people.
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div> */}
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <SocialIcon
                    url="https://www.linkedin.com/in/shanmukhchowdary147/"
                    bgColor="#FFFFFF"
                    target="_blank"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://github.com/shanmukhchowdary147"
                    bgColor="#FFFFFF"
                    target="_blank"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://www.instagram.com/___shannu.___/"
                    bgColor="#FFFFFF"
                    target="_blank"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
