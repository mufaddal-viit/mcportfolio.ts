import type { ReactNode } from "react";
import "../styles/App.css";
import { HexagonBackground } from "./animate-ui/components/backgrounds/hexagon";
import { SmoothCursor } from "@/components/ui/smooth-cursor"

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SmoothCursor />
      <HexagonBackground
        className="fixed inset-0 -z-10 bg-bg text-text"
        bgColorBefore="before:bg-brand/10 dark:before:bg-surface before:animate-[hexagon-fade_10s_ease-in-out_infinite]"
        bgColorAfer="after:bg-bg dark:after:bg-bg/50"
        aria-hidden="true"
      >
      </HexagonBackground>
      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  );
};

export default Layout;
