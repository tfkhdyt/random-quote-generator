interface CardProps {
  title: string;
  description: string;
}

const Card = (props: CardProps) => {
  return (
    <div className='relative p-5 bg-slate-100 rounded'>
      <h1 className='font-medium text-4xl mb-3 tracking-wide'>{props.title}</h1>
      <p className='font-light leading-relaxed text-sm'>{props.description}</p>
    </div>
  );
};

export default Card;
