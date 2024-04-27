export interface FieldTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  afterInputSlot?: React.ReactNode;
  beforeInputSlot?: React.ReactNode;
  wrapProps?: React.HTMLAttributes<HTMLDivElement>;
  theme?: "base" | "grey";
}
