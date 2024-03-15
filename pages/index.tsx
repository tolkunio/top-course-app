import Htag from "@/components/Htag/Htag";
import Button from "@/components/Button/Button";
import Paragraph from "@/components/Paragraph/Paragraph";
import Rating from "@/components/Rating/Rating";
import {useState} from "react";
import {withLayout} from "@/Layout/Layout";
import {JSX} from "react";

 function Home():JSX.Element{
    const [rating,setRating]=useState<number>(4)
  return (
      <>
         <Htag tag={'h1'}>hello</Htag>
          <Button appearance={'primary'} arrow={'down'}>Узнать подробнее</Button>
          <Button appearance={'ghost'} arrow={'right'}>Читать отзывы</Button>
          <Paragraph size={'small'}>Напишу сразу в двух курсах, так как проходил оба. J</Paragraph>
          <Paragraph>Напишу сразу в двух курсах, так как проходил оба. J</Paragraph>
          <Paragraph size={'large'}>Напишу сразу в двух курсах, так как проходил оба. J</Paragraph>
          <Rating rating={rating} setRating={setRating} isEditable/>
      </>
  );
}
export default withLayout(Home);