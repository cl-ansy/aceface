"use client";

import { useState } from "react";

export default function JoinRoom() {
  const [roomId, setRoomId] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.nativeEvent.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-min items-center rounded-base border-2 border-black font-base shadow-base"
      role="form">
      <input
        className="w-[30ch] rounded-base p-[10px] outline-none"
        type="text"
        name="roomId"
        id="roomId"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => {
          setRoomId(e.target.value);
        }}
      />
      <button
        className="rounded-e-[5px] border-l-2 border-black bg-main p-[10px] px-5"
        type="submit"
        aria-label="Join">
        Join
      </button>
    </form>
  );
}
