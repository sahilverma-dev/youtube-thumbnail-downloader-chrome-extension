import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import Header from "./components/custom/header";
import ThumbnailList, { Thumbnail } from "./components/custom/thumbnail-list";
import NotValidLink from "./components/custom/not-valid-link";

const getThumbnails = (id: string): Thumbnail[] => [
  {
    id,
    url: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    size: "1280x720",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/maxres1.jpg`,
    size: "1280x720",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/maxres2.jpg`,
    size: "1280x720",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/maxres3.jpg`,
    size: "1280x720",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/sddefault.jpg`,
    size: "640x480",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/sd1.jpg`,
    size: "640x480",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/sd2.jpg`,
    size: "640x480",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/sd3.jpg`,
    size: "640x480",
  },
  {
    id,
    url: `https://i3.ytimg.com/vi/${id}/hqdefault.jpg`,
    size: "480x360",
  },
  {
    id,
    url: `https://i.ytimg.com/vi/${id}/hq1.jpg`,
    size: "480x360",
  },
  {
    id,
    url: `https://i.ytimg.com/vi/${id}/hq2.jpg`,
    size: "480x360",
  },
  {
    id,
    url: `https://i.ytimg.com/vi/${id}/hq3.jpg`,
    size: "480x360",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    size: "320x180",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/mq1.jpg`,
    size: "320x180",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/mq2.jpg`,
    size: "320x180",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/mq3.jpg`,
    size: "320x180",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/default.jpg`,
    size: "120x90",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/1.jpg`,
    size: "120x90",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/2.jpg`,
    size: "120x90",
  },
  {
    id,
    url: `https://img.youtube.com/vi/${id}/3.jpg`,
    size: "120x90",
  },
];

const getVideoId = (url: string) => {
  if (url?.startsWith("https://www.youtube.com/shorts/")) {
    return url?.split("/")[4];
  } else {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
};

const App = () => {
  const [validYTUrl, setValidYTUrl] = useState(false);
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);

  useEffect(() => {
    if (chrome)
      chrome?.tabs?.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        const tab = tabs[0];
        const url = new URL(tab?.url!);

        const videoId = getVideoId(url.toString());
        if (videoId) {
          setValidYTUrl(true);
          setThumbnails(getThumbnails(videoId));
        }

        if (!videoId) {
          setValidYTUrl(false);
        }
      });
  }, []);

  return (
    <div className="bg-background">
      <Header />
      {validYTUrl ? (
        <AnimatePresence mode="wait">
          {thumbnails.length > 0 ? (
            <ThumbnailList thumbnails={thumbnails} />
          ) : (
            <div
              className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
              role="alert"
            >
              Download youtube video, live and shorts thumbnail images of all
              quality for free. This application let you download thumbnails of
              all quality. Just paste the URL of the thumbnail video in the
              below input and click Get Thumbnail Image
            </div>
          )}
        </AnimatePresence>
      ) : (
        <NotValidLink />
      )}
    </div>
  );
};

export default App;
