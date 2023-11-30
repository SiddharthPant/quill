import { cn } from "@/lib/utils";
import { ExtendedMessage } from "@/types/message";

interface MessageProps {
  message: ExtendedMessage;
  isNextMessageSamePerson: boolean;
}

const Message = ({ message, isNextMessageSamePerson }: MessageProps) => {
  return <div className={cn("flex items-end")}></div>;
};

export default Message;
