import Card from "_shared/presentation/components/card.component";
import ModalCard from "_shared/presentation/components/modal.component";
import { useAppSelector } from "infrastructure/store";
import { DataPokemon } from "infrastructure/store/pokemon";
import ContentContainer from "presentation/components/container";
import { useState } from "react";

export const mpRouteName = "my-pokemon";

const MyPokemon = () => {
  const { data } = useAppSelector((state) => state.pokemon);
  const [open, setOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<DataPokemon>();

  return (
    <ContentContainer>
      <div className="flex flex-col gap-8">
        <p className="text-3xl font-semibold">My Pokemon List</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4 sm:p-4">
          {data?.map((val) => (
            <Card
              key={val.id}
              data={val}
              title="See Details"
              onClick={() => {
                setSelectedPokemon(val); 
                setOpen(true);
              }}
              disabled={false}
            />
          ))}
        </div>
      </div>

      <ModalCard open={open} setOpen={setOpen} value={selectedPokemon} />
    </ContentContainer>
  );
};

export default MyPokemon;
