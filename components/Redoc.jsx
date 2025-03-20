import { RedocStandalone } from "redoc";

const Redoc = ({ specUrl }) => {
  return (
    <div className='redoc-container'>
      <RedocStandalone specUrl={specUrl} />
    </div>
  );
}

export default Redoc;