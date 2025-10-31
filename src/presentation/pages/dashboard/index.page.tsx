import ContentContainer from "presentation/components/container";
import Card from "_shared/presentation/components/card.component";
import { useGetPokemonQuery } from "infrastructure/services/modules/pokemon";
import { useAppDispatch, useAppSelector } from "infrastructure/store";
import { addPokemon, DataPokemon } from "infrastructure/store/pokemon";

const Dashboard = () => {
  const { data } = useGetPokemonQuery({ limit: 12, offset: 0 });
  const dispatch = useAppDispatch();
  const { data: dataPokemon } = useAppSelector((state) => state.pokemon);
  const handleAddPokemon = (payload: DataPokemon) => {
    dispatch(addPokemon(payload));
  };

  return (
    <ContentContainer>
      <div className="flex flex-col gap-8">
        <p className="text-3xl font-semibold">Pokemon List</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4 sm:p-4">
          {data?.results.map((val) => (
            <Card
              data={val}
              title={`Add ${val.name}`}
              onClick={() =>
                handleAddPokemon({ ...val, id: val.url.split("/")[6] })
              }
              disabled={
                dataPokemon?.some(
                  (item) => item.id === val.url.split("/")[6]
                ) ?? false
              }
            />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default Dashboard;
