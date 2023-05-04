import spinner from '../assets/spinner.gif';
const Spinner = () => {
  return (
    <div className='w-30 mt-20'>
      <img 
        className='text-center mx-auto'
        width={180} 
        src={spinner}
        alt='Loading...'
      ></img>
    </div>
  );
};

export default Spinner;
