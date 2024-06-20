import { Tab as HeadlessTab } from "@headlessui/react";
import { Box, Text } from "@components/index";
import { FC } from "react";
import clsx from "clsx";

interface ITabProps {
  title: string;
  selected?: boolean;
}

const gradient = "bg-gradient-to-r from-teal-400 to-cyan-700";

export const Tab: FC<ITabProps> = ({ title, selected }) => {
  return (
    <HeadlessTab className="outline-none w-full pt-1">
      <Box className={clsx(selected && `pb-1 rounded-tl-xl ${gradient}`)}>
        <Box className="p-2 px-4 bg-white rounded-tl-xl">
          <Text
            className={clsx(
              selected
                ? `inline-block text-transparent bg-clip-text ${gradient}`
                : "text-zinc-600",
              "text-sm font-semibold"
            )}
          >
            {title}
          </Text>
        </Box>
      </Box>
    </HeadlessTab>
  );
};
