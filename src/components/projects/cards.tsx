import chapterhouseNewCourse from "../../assets/projects/screenshots/new-course.png";
import fallingBookFallOfBabel from "../../assets/projects/screenshots/fall-of-babel.png";
import silicaInput from "../../assets/projects/screenshots/input.png";

import {
   FramerMotion,
   Node,
   Postgres,
   React,
   Redux,
   RTK,
   Typescript,
   ESBuild,
   MonacoEditor,
} from "../badges/Badges";

export interface CardsObj {
   title: string;
   subTitle: string;
   intro: string;
   images: string[];
   num: string;
   technologies: React.ReactNode[];
   description: string[];
   www: string;
   repo: string;
}

const cards: CardsObj[] = [
   {
      title: "Chapterhouse",
      subTitle: "Learning Management System",
      intro: "Chapterhouse is a modular educational material creation platform.",
      images: [chapterhouseNewCourse],
      num: "01",
      technologies: [
         <React />,
         <Typescript />,
         <Node />,
         <Postgres />,
         <RTK />,
         <FramerMotion />,
      ],
      description: [
         "Upon registration, users are walked through a step-by-step course-creation process with tips and hints available in case the instructor requires additional guidance.",
         "Courses are split into user-created modules familiar to students of all ages and backgrounds.",
         "Actual content creation has word-processing, rich-text, functionality, in addition to video and other media support.",
         "Once the content is ready to be published, instructors may share a course link with their students.",
      ],
      www: "https://www.chapterhouselms.com",
      repo: "https://github.com/NartayKasim/chapterhouse-lms",
   },
   {
      title: "Falling Book",
      subTitle: "Social Book Catalogue, Review and Rating Aggregator",
      intro: "Social book search, ratings and reviews aggregator.",
      images: [fallingBookFallOfBabel],
      num: "02",
      technologies: [
         <React />,
         <Node />,
         <Postgres />,
         <Redux />,
         <FramerMotion />,
      ],
      description: [
         "Search results include book information in addition to the reviews and ratings from other Falling Book members.",
         "Additional functionality is provided through the booklists feature, which allows users to track books by adding them unto their custom lists.",
         "Inspired by the popular social cataloguing book review website - Goodreads.",
      ],
      www: "https://www.fallingbook.com",
      repo: "https://github.com/NartayKasim/falling-book",
   },
   {
      title: "Silica",
      subTitle: "Javascript/React Sandbox",
      intro: "Silica is an interactive development environment for Javascript/React.",
      images: [silicaInput],
      num: "03",
      technologies: [<React />, <Typescript />, <ESBuild />, <MonacoEditor />],
      description: [
         "Silica utilizes ESBuild's JS and CSS bundler.",
         "Formatting and syntax highlighting handled by Monaco Editor - which is the same technology utilized by VS Code.",
         "Supports NPM packages.",
      ],
      www: "https://www.silica.live",
      repo: "https://github.com/NartayKasim/silica",
   },
];

export default cards;
