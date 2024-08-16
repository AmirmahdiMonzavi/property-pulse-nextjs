"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import markMessageAsRead from "@/actions/markMessageAsRead";
import deleteMessage from "@/actions/deleteMessage";

export type Message = {
  _id: string;
  sender: string;
  recipient: string;
  property: {
    name: string;
  };
  name: string;
  email: string;
  phone: string;
  body: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const MessageCard = ({ message }: { message: Message }) => {
  const [isRead, setIsRead] = useState(message.read);

  const handleReadClick = async () => {
    const read = await markMessageAsRead(message._id);

    setIsRead(read);
    toast.success(`Mark As ${read ? "Read" : "New"}`);
  };

  const handleDeleteClick = async () => {
    await deleteMessage(message._id);

    toast.success("Message Deleted");
  };

  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border-gray-200">
      {!isRead && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-whit px-2 py-1 rounded-md">
          New
        </div>
      )}
      <h2 className="text-xl mb-4">
        <span className="font-bold">Property Inquiry:</span>{" "}
        {message.property.name}
      </h2>
      <p className="text-gray-700">{message.body}</p>

      <ul className="mt-4">
        <li>
          <strong>Reply Email: </strong>{" "}
          <a href={`mailto:${message.email}`} className="text-blue-500">
            {message.email}
          </a>
        </li>
        <li>
          <strong>Reply Phone: </strong>{" "}
          <a href={`tel:${message.phone}`} className="text-blue-500">
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Received: </strong>{" "}
          {new Date(message.createdAt).toLocaleString()}
        </li>
      </ul>
      <button
        onClick={handleReadClick}
        className="mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md"
      >
        {isRead ? "Mark As New" : "Mark As Read"}
      </button>
      <button
        onClick={handleDeleteClick}
        className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default MessageCard;
