import { CloseCircle } from "iconsax-react";
import { useAppDispatch } from "infrastructure/store";
import { DataPokemon, deletePokemon } from "infrastructure/store/pokemon";
import MInput from "presentation/components/multi-input";
import React from "react";
import { Button, Modal } from "react-daisyui";

const ModalCard = ({
  open,
  setOpen,
  value,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value?: DataPokemon;
}) => {
  const dispatch = useAppDispatch();
  return (
    <Modal open={open} className="bg-white w-full sm:w-96 h-96 max-w-[2000px] p-4 ">
      <div className="flex justify-end items-center">
        <CloseCircle
          size={28}
          variant="Bold"
          color="#FF3838"
          className="cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <div className="flex flex-col h-[90%] gap-4 items-center justify-between">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${value?.id}.svg`}
            alt={value?.name}
            className="w-48 h-48 object-contain flex-shrink-0"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <p>{value?.name}</p>
          <Button
            onClick={() => {
              dispatch(deletePokemon(value?.id ?? ""));
              setOpen(!open);
            }}
            className="capitalize min-h-0 h-8 w-full bg-[#FF3838] border-[#FF3838] text-white hover:bg-[#FF3838] hover:border-[#FF3838]"
          >
            Remove
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
