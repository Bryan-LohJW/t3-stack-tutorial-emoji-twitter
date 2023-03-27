import type { FC, PropsWithChildren } from "react";

export const PageLayout: FC<PropsWithChildren> = (props) => {
  return (
    <main className="flex h-screen justify-center">
      <div
        className="h-full w-full overflow-y-scroll border-x border-slate-400 md:max-w-2xl"
        id="scrollWrapper"
      >
        {props.children}
      </div>
    </main>
  );
};
