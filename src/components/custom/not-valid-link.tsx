import { CircleXIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";

const NotValidLink = () => {
  return (
    <div className="w-full aspect-square flex items-center justify-center flex-col gap-3">
      <CircleXIcon className="text-red-500" strokeWidth={2.5} size={120} />
      <p>Not a valid youtube video/shorts/live-stream page.</p>
      <p>
        Open{" "}
        <a
          href="https://youtube.com"
          target="_blank"
          className={buttonVariants({ variant: "link", className: "!p-0" })}
        >
          YouTube
        </a>{" "}
        video page and try again.
      </p>
    </div>
  );
};

export default NotValidLink;
