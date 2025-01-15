import React from "react";
import { MdAddBox, MdOutlineComment } from "react-icons/md";
import { MdAdd } from "react-icons/md";

const AddCommentIcon = () => {
  return (
    <div className="relative inline-block">
      {/* Comment Icon */}
      <MdOutlineComment className="text-gray-600 text-4xl" />

      {/* Plus Icon (Positioned Overlapping at the Bottom-Right) */}
      <MdAddBox className="absolute bottom-0 left-0 text-black" />
    </div>
  );
};

export default AddCommentIcon;
