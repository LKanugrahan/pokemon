import { isEmpty } from "lodash";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import type {
  DraggableProvided,
  OnDragEndResponder,
} from "react-beautiful-dnd";

export interface Columns<T> {
  fieldId: string;
  fieldId2?: string;
  fieldId3?: string;
  label: string | React.ReactElement;
  render?: (data?: T) => React.ReactElement | string;
  renderHeader?: () => React.ReactElement | string;
}

interface Props<T> {
  data?: any[];
  columns: Columns<T>[];
  ranked?: boolean;
  loading?: boolean | null;
  error?: string;
  action?: boolean;
  currentPage?: number;
  limit?: number;
  onRowClick?: (item: T) => void;
  onRowDragEnd?: OnDragEndResponder;
  isDnD?: boolean;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export function Table<T>({
  data = [],
  columns = [],
  ranked = false,
  loading = false,
  error = "",
  action = false,
  currentPage = 1,
  limit = 0,
  onRowClick,
  onRowDragEnd,
  isDnD = false,
}: Props<T>): React.ReactElement {
  const handleRowClick = (item: T): void => {
    if (onRowClick !== undefined) {
      onRowClick(item);
    }
  };
  const TableState = () => {
    return (
      <>
        {loading !== true && isEmpty(error) && isEmpty(data) && (
          <tr className="divide-x divide-[#BDBDBD]">
            <td
              colSpan={columns.length}
              className="p-4 text-center whitespace-nowrap text-sm text-[#201B1C]"
            >
              <div className="flex flex-col items-center">
                <span className="py-6 text-base text-[#808080] ">
                  No Data Here
                </span>
              </div>
            </td>
          </tr>
        )}
        {loading !== true && !isEmpty(error) && (
          <tr className="divide-x divide-[#BDBDBD]">
            <td
              colSpan={columns.length}
              className="p-4 text-center whitespace-nowrap text-sm text-[#201B1C]"
            >
              {error}
            </td>
          </tr>
        )}
        {loading === true && (
          <tr className="divide-x divide-[#BDBDBD]">
            <td
              colSpan={columns.length}
              className="p-4 text-center whitespace-nowrap text-sm text-[#201B1C]"
            >
              Loading...
            </td>
          </tr>
        )}
      </>
    );
  };
  const TableRow = ({
    data,
    index,
    provided,
  }: {
    data: any;
    index: number;
    provided?: DraggableProvided;
  }) => {
    return (
      <tr
        ref={provided?.innerRef}
        {...provided?.draggableProps}
        {...provided?.dragHandleProps}
        key={index}
        className={classNames(
          ranked
            ? index === 0
              ? "bg-[#EDFCD3]"
              : index === 1
              ? "bg-[#DCE1FE]"
              : index === 2
              ? "bg-[#FFF7D2]"
              : ""
            : "",
          "",
          action ? "hover:bg-gray-200 cursor-pointer" : ""
        )}
        onClick={(): void => {
          handleRowClick(data);
        }}
        role={action ? "button" : undefined}
      >
        {columns.map((column, row) => (
          <td
            key={row}
            className={`p-4 text-center whitespace-nowrap leading-7 font-poppins font-normal text-sm text-[#201B1C] ${
              row === 7 || row === 8 ? "" : ""
            }`}
          >
            {column.fieldId === "index" &&
              index + 1 + (currentPage - 1) * limit}
            {column?.render === undefined && data[column.fieldId]}
            <p className="text-gray-500">
              {column?.fieldId2 !== undefined && data[column.fieldId2]}
            </p>
            {column?.render !== undefined && column.render(data)}
            <span>
              {column?.fieldId3 !== undefined && data[column.fieldId3]}
            </span>
          </td>
        ))}
      </tr>
    );
  };

  return (
    <table className="min-w-full">
      <thead className="bg-[#F7F7F7]">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="p-4 text-center whitespace-nowrap text-sm font-semibold text-black"
            >
              <div className="flex justify-center">
                {column.label}
                {column?.renderHeader !== undefined && column?.renderHeader()}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      {isDnD ? (
        <DragDropContext onDragEnd={onRowDragEnd!}>
          <Droppable droppableId="table">
            {(provided) => (
              <tbody
                className="bg-white"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {loading !== true &&
                  isEmpty(error) &&
                  !isEmpty(data) &&
                  data?.map((data, index) => (
                    <Draggable
                      draggableId={`${data.id}`}
                      key={data.id}
                      index={index}
                    >
                      {(provided) => (
                        <TableRow
                          data={data}
                          index={index}
                          provided={provided}
                        />
                      )}
                    </Draggable>
                  ))}

                <TableState />
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <tbody className="bg-white">
          {loading !== true &&
            isEmpty(error) &&
            !isEmpty(data) &&
            data?.map((data, index) => <TableRow data={data} index={index} />)}

          <TableState />
        </tbody>
      )}
    </table>
  );
}
