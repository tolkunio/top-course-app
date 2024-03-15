import Htag from "@/components/Htag/Htag";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
      <div>
         <Htag tag={'h1'}>hello</Htag>
          <Button appearance={'primary'} arrow={'down'}>Узнать подробнее</Button>
          <Button appearance={'ghost'} arrow={'right'}>Читать отзывы</Button>
      </div>
  );
}
