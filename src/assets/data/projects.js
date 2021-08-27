import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'ForHer',
    desc:
      "ForHer is a women safety app where women can send their current location to their guardians and police when they feel insecure and in danger. They just need to open the app and send the alert message to their family or friends just by shaking the phone or clicking the send location button. There is a separate Login page for police to see the recent requests that contain the user's image, name, location, and contact number. Android Studio, Java, Google Firebase. Selected as one of the best projects in the university and shortlisted for the industrial Project Expo.",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Farm Share',
    desc:
      'This is a project to help farmers overcome the problem of lack of machinery or agricultural equipment. Lessee ( farmers who cannot afford to buy agricultural equipment) can take equipment as rent from Lessor ( farmers who can afford to buy equipment) and pay them. So, in this way both the farmers get benefited.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Covid-19 Tracker',
    desc:
      "This is an android app to track the Covid-19 cases. It shows some major aspects like total cases, active cases, today's cases, total deaths, today's deaths, number of people recovered, and affected countries. This information is divided into 2 particular sections so that the user can keep track of the total cases worldwide and in a particular country.",
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Hostel Management system',
    desc:
      'This is a Desktop application used to manage Hostel Administration.A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
