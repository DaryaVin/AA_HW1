interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: "button";
}
interface anchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag?: "a";
}
interface generalProps {
  children: React.ReactNode;
  theme?: "withBorder" | "fillBcg" | "textOnly";
}
export type ButtonProps = generalProps & (buttonProps | anchorProps);
