import { PaginationProps } from "_shared/domain/dto/main.interfaces";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { Controller, FieldValues } from "react-hook-form";

const Pagination = <T extends FieldValues>({
  currentPage,
  totalPages,
  control,
  registerName,
}: PaginationProps<T>) => {
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, currentPage + 2);

  if (end - start + 1 < 5) {
    if (start === 1) {
      end = Math.min(totalPages, start + 4);
    } else if (end === totalPages) {
      start = Math.max(1, end - 4);
    }
  }

  let arr: number[] = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return (
    <Controller
      control={control}
      name={registerName}
      render={({ field: { onChange,value } }) => (
        <div className="flex items-center">
          <div
            className="flex relative cursor-pointer"
            onClick={() => onChange(1)}
          >
            <ArrowLeft2 size={16} variant="Bold" color="#201B1C" />
            <ArrowLeft2
              size={16}
              variant="Bold"
              color="#201B1C"
              className="absolute right-2.5"
            />
          </div>

          {arr.map((i) => (
            <div
              key={i}
              onClick={() => onChange(i)}
              className={`${value===i?"text-white bg-[#58A399]":"text-[#201B1C]"} font-semibold text-sm text-center cursor-pointer rounded-full p-1`}
            ><p className="w-5 h-5">{i}</p>
              
            </div>
          ))}
          <div
            className="flex relative cursor-pointer"
            onClick={() => onChange(totalPages)}
          >
            <ArrowRight2 size={16} variant="Bold" color="#201B1C" />
            <ArrowRight2
              size={16}
              variant="Bold"
              color="#201B1C"
              className="absolute left-2.5"
            />
          </div>
        </div>
      )}
    />
  );
};

export default Pagination;
