import { ChatBubble } from "react-daisyui";

type Props = { roomId: string };

const RoomIdBubble = ({ roomId }: Props) => {
  return (
    <div className=" w-full">
      <ChatBubble
        end={true}
        className=" animate__animated animate__headShake animate__delay-4s cursor-pointer"
      >
        {/* TODO toast message to show code was copied */}
        <ChatBubble.Message
          color="accent"
          onClick={() => roomId && navigator.clipboard.writeText(roomId)}
        >
          <span className="font-bold text-4xl">{roomId}</span>
        </ChatBubble.Message>
      </ChatBubble>
    </div>
  );
};

export default RoomIdBubble;
