type CardProps = {
  title: string;
  description: string;
};

function Card(props: CardProps): JSX.Element {
  return (
    <div className='relative rounded bg-slate-100 p-5'>
      <h1 className='mb-3 text-4xl font-semibold tracking-tight'>
        {props.title}
      </h1>
      <p className='text-sm leading-relaxed'>{props.description}</p>
    </div>
  );
}

export default Card;
