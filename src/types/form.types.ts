import { ChangeEventHandler } from "react";

export interface FormFieldDef<T = any> {
  id?: string;
  name: string;
  value?: string;
  onBlur?: () => void;
  onChange: ChangeEventHandler<T>;
}
