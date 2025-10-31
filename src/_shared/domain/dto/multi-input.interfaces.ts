import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { GroupBase, OptionsOrGroups } from "react-select";

export interface Option {
  label: string;
  value: any;
}

interface Data {
  label: string;
  value: any;
}

interface CommonProps<T extends FieldValues> {
  registerName: Path<T>;
  label?: string;
  errors?: FieldErrors<T>;
  extraElement?: React.ReactNode;
  innerElement?: React.ReactNode;
}

export interface CommonIProps<T extends FieldValues> extends CommonProps<T> {
  type: "text" | "datetime-local" | "password" | "time" | "date" | "email";
  register: UseFormRegister<T>;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  className?: string;
}

export interface NumberIProps<T extends FieldValues> extends CommonProps<T> {
  type: "number";
  watch: UseFormWatch<T>;
  control: Control<T, any>;
  locale?: string;
  disabled?: boolean;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  decimalsLimit?: number;
  max?: number;
}

interface CheckboxIProps<T extends FieldValues> extends CommonProps<T> {
  type: "checkbox";
  labelCheckbox?: string;
  value: any;
  register: UseFormRegister<T>;
  disabled?: boolean;
}

interface RadioIProps<T extends FieldValues> extends CommonProps<T> {
  type: "radio";
  data: Data[];
  register: UseFormRegister<T>;
  disabled?: boolean;
}
interface MarkdownIProps<T extends FieldValues> extends CommonProps<T> {
  type: "md-rich-text";
  control: Control<T, any>;
}
interface HtmlIProps<T extends FieldValues> extends CommonProps<T> {
  type: "html-rich-text";
  control: Control<T, any>;
}
interface ImageIProps<T extends FieldValues> extends CommonProps<T> {
  type: "image";
  imageURLPreview: string | undefined;
  dataImage?: string;
  isCrop?: boolean;
  handleOpen?: () => void;
  register: UseFormRegister<T>;
}

interface DropdownProps<T extends FieldValues> extends CommonProps<T> {
  type: "dropdown";
  async?: boolean;
  data?:
    | ((
        inputValue: string,
        callback: (options: OptionsOrGroups<any, GroupBase<any>>) => void
      ) => void | Promise<OptionsOrGroups<any, GroupBase<any>>>)
    | undefined;
  registerName: Path<T>;
  control: Control<T, any>;
  options?: OptionsOrGroups<any, GroupBase<Option>>;
  disabled?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
}

export type MultiProps<T extends FieldValues> =
  | CommonIProps<T>
  | NumberIProps<T>
  | CheckboxIProps<T>
  | RadioIProps<T>
  | MarkdownIProps<T>
  | HtmlIProps<T>
  | ImageIProps<T>
  | DropdownProps<T>;
