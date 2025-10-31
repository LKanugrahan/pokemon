import { Data } from "domain/dto/pokemon/res.interfaces";
import { Button } from "react-daisyui";

const Card = ({
  data,
  onClick,
  disabled,
  title
}: {
  data: Data;
  disabled: boolean;
  title: string;
  onClick: () => void;
}) => {
  const id = data.url.split("/")[6];
  return (
    <div className="bg-white sm:w-48 h-20 sm:h-48 rounded-xl shadow-xl sm:p-4 p-3 flex sm:flex-col items-center sm:justify-end gap-3">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={data.name}
        className="sm:w-2/3 w-9 h-2/3 object-contain flex-shrink-0"
      />
      <div className="w-full">
        <Button
          className="capitalize min-h-0 h-8 w-full disabled:bg-[#E8E8E8] disabled:border-[#E8E8E8] disabled:text-white"
          onClick={onClick}
          disabled={disabled}
        >
         {title}
        </Button>
      </div>
    </div>
  );
};

export default Card;
