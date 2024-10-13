import { galleryVariants, imageVariants } from "@/lib/constants/variants";
import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";

import { ExternalLinkIcon } from "lucide-react";

export interface Thumbnail {
  id: string;
  url: string;
  size: string;
}

interface Props {
  thumbnails: Thumbnail[];
}

const ThumbnailList: React.FC<Props> = ({ thumbnails }) => {
  return (
    <motion.div
      variants={galleryVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 p-2 md:grid-cols-4 gap-2"
    >
      {thumbnails.map((thumbnail) => (
        <motion.div
          key={thumbnail.url}
          variants={imageVariants}
          className="relative aspect-video overflow-hidden rounded-md border"
        >
          <span className="absolute top-2 left-2 bg-secondary-foreground/50 backdrop-blur rounded px-2 py-1 text-xs text-secondary border border-background/20">
            {thumbnail.size}
          </span>

          <a href={thumbnail.url} target="_blank" rel="noreferrer">
            <img
              src={thumbnail.url}
              alt={thumbnail.size}
              className="w-full h-full object-cover"
            />
          </a>
          <a
            href={thumbnail.url}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "secondary",
              size: "icon",
              className:
                "aspect-square absolute bottom-2 right-2 !bg-green-500 text-white",
            })}
          >
            <ExternalLinkIcon size={12} />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ThumbnailList;
