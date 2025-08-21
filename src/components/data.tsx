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

export { navLinks, cardsData };
