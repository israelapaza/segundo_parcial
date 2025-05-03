import Header from './Header';
import Body from './Body';
import Footer from './Footer';

interface CardProps {
  number: string;
  title: string;
  code: string;
  description: string;
  date: string;
  status: 'active' | 'future' | 'completed'; 
}

const Card = ({ number, title, code, description, date, status }: CardProps) => {
  return (
    <div className={`card card-${status}`}>
      <Header number={number} title={title} code={code} status={status} />
      <Body description={description} />
      <Footer date={date} status={status} />
    </div>
  );
};

export default Card;

