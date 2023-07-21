import { IMG_CDN_URL } from "../contants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card w-[350] hover:border-2 p-4  bg-gray-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      {/* <h3>{cuisines.join(", ")}</h3> */}
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export const WithPromotedTag = (RestaurantCard) => {
  return (props) => {
    const { resdata } = props;
    console.log(resdata);
    return (
      <div className="relative">
        <label htmlFor="" className="absolute bg-red-500 rounded-lg p-1">
          Promoted
        </label>
        <RestrauntCard {...resdata} />
      </div>
    );
  };
};

export default RestrauntCard;
