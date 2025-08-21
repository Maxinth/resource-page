import imgOne from "@/assets/img-1.png";
import imgTwo from "@/assets/img-2.png";
import imgThree from "@/assets/img-3.png";
import imgFour from "@/assets/img-4.png";
import imgFive from "@/assets/img-5.png";
import imgSix from "@/assets/img-6.png";
import linkIcon from "@/assets/link-icon.svg";
import videoIcon from "@/assets/video-icon.svg";
import pdfIcon from "@/assets/pdf-icon.svg";

export type Card = {
  img: string;
  icon: string;
  category?: string;
  text?: string;
};
const navLinks = ["Dashboard", "Resources", "Toolkit"];

const cardsData: Card[] = [
  {
    img: imgOne,
    icon: linkIcon,
  },
  {
    img: imgTwo,
    icon: videoIcon,
  },
  {
    img: imgThree,
    icon: linkIcon,
  },
  {
    img: imgFour,
    category: "Wellbeing",
    icon: videoIcon,
  },
  {
    img: imgFive,
    icon: pdfIcon,
  },
  {
    img: imgSix,
    text: "Taking stock of mental health in your workplace",
    icon: pdfIcon,
  },
];

const keyFoundationalPrinciples = [
  { id: "secureBase", label: "Secure Base" },
  { id: "senseAppreciation", label: "Sense of Appreciation" },
  { id: "learningOrg", label: "Learning Organisation" },
  { id: "missionVision", label: "Mission and Vision" },
  { id: "wellbeing", label: "Wellbeing" },
];

const docType = [
  { id: "doc", label: "DOC" },
  { id: "link", label: "Link" },
  { id: "pdf", label: "PDF" },
  { id: "video", label: "Video" },
];
const categories = [
  { id: "sample-1", label: "Sample" },
  { id: "sample-2", label: "Sample" },
  { id: "sample-3", label: "Sample" },
  { id: "sample-4", label: "Sample" },
  { id: "sample-5", label: "Sample" },
];

export { navLinks, cardsData, keyFoundationalPrinciples, docType, categories };
