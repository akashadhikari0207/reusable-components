import React from "react";
import Badge from "./Components/Badge";
import { FaCircle, FaComment, FaSpinner } from "react-icons/fa6";
import { FaCheckCircle, FaCommentAlt } from "react-icons/fa";
import {
  MdAdd,
  MdAddTask,
  MdCircle,
  MdOutlineAddComment,
  MdOutlineArchive,
  MdOutlineComment,
  MdOutlinePlayArrow,
  MdRadioButtonUnchecked,
  MdTask,
  MdUnarchive,
} from "react-icons/md";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { AiOutlineCiCircle } from "react-icons/ai";
import AddCommentIcon from "./Components/AddCommentIcon";

const BadgesApp = () => {
  return (
    <div className="p-5">
      <Badge
        variant="success"
        label="Complete"
        className="me-2"
        icon={FaCheckCircle}
      />
      <Badge
        label="In Process"
        variant="purple"
        className="me-2"
        icon={MdRadioButtonUnchecked}
      />
      <Badge label="New" variant="info" className="me-2" icon={MdTask} />

      <Badge variant="success" label="Complete" className="me-2" />
      <Badge label="In Process" variant="purple" className="me-2" />
      <Badge label="New" variant="info" className="me-2" />

      <Badge
        label="Sat"
        variant="warning"
        className="me-2 text-[10px] font-medium"
      />
      <Badge
        label="Sun"
        variant="danger"
        className="me-2 text-[10px] font-medium"
      />

      <Badge
        variant="light-green"
        className="me-2"
        icon={MdOutlineComment}
        onClick={() => alert("click")}
      />
      <Badge
        variant="light-green"
        className="me-2"
        icon={MdOutlineAddComment}
        onClick={() => alert("click")}
      />

      <Badge
        variant="light-green"
        className="me-2"
        icon={AddCommentIcon}
        onClick={() => alert("click")}
      />

      <Badge variant="success" className="me-2" icon={MdAddTask} />
      <Badge variant="purple" className="me-2" icon={MdOutlinePlayArrow} />
      <Badge variant="info" className="me-2" icon={FaSpinner} />
    </div>
  );
};

export default BadgesApp;
