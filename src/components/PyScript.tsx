import { ReactNode } from "react";

export default function PyScript({
  children,
  src,
  output,
}: {
  output?: string;
  src?: string;
  children?: ReactNode;
}) {
  return (
    <py-script src={src} output={output}>
      {children}
    </py-script>
  );
}
