import { VscGithub } from "react-icons/vsc";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <div className="w-full p-2 bg-secondary/50 sticky top-0 backdrop-blur border-b border-border/10 z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/images/icon-128.png"
            className="w-10 h-10 object-contain"
            alt="Youtube Thumbnail Downloader"
          />
          <p className="text-xs">YT Thumbnails downloader</p>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="https://github.com/sahilverma-dev/Youtube-Thumbnail-Extracter"
            target="_blank"
            className={buttonVariants({
              variant: "secondary",
              size: "icon",
              className: "gap-2 h-auto text-sm aspect-square",
            })}
          >
            <VscGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
