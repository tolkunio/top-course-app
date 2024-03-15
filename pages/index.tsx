import Htag from "@/components/Htag/Htag";
import Button from "@/components/Button/Button";
import Paragraph from "@/components/Paragraph/Paragraph";

export default function Home() {
  return (
      <div>
         <Htag tag={'h1'}>hello</Htag>
          <Button appearance={'primary'} arrow={'down'}>Узнать подробнее</Button>
          <Button appearance={'ghost'} arrow={'right'}>Читать отзывы</Button>
          <Paragraph size={'small'}>Напишу сразу в двух курсах, так как проходил оба. J</Paragraph>
          <Paragraph>Напишу сразу в двух курсах, так как проходил оба. J</Paragraph>
          <Paragraph size={'large'}>Напишу сразу в двух курсах, так как проходил оба. J</Paragraph>
      </div>
  );
}
