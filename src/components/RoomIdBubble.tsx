import { useState } from "react";
import { ChatBubble } from "react-daisyui";

type Props = { roomId: string };

const RoomIdBubble = ({ roomId }: Props) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleClick = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
  };

  return (
    <div
      className="tooltip cursor-pointer"
      data-tip={showTooltip ? "Copié" : null}
    >
      <ChatBubble
        end={true}
        onClick={handleClick}
        className=" animate__animated animate__headShake animate__delay-4s "
        onMouseOut={() => setShowTooltip(false)}
      >
        <ChatBubble.Message
          color="accent"
          onClick={() => roomId && navigator.clipboard.writeText(roomId)}
        >
          <span className="font-bold text-lg">{roomId}</span>
        </ChatBubble.Message>
      </ChatBubble>
    </div>
  );
};

export default RoomIdBubble;
