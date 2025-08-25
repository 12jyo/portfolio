import { profileVideo } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="hidden lgl:flex lgl:w-1/2 justify-center items-center relative">
      <div className='videoWrapper'>
        <img style={{'border-radius': '25%', width:'100%'}} alt="" src={profileVideo} />
      </div>
    </div>
  );
}

export default RightBanner