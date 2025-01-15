import React from "react";

const BadgeColorVariants = Object.freeze({
  success: {
    badgeStyle: "bg-[#D7FBF9] text-black",
    iconStyle: "text-[#00C7BE]",
  },
  purple: {
    badgeStyle: "bg-[#F1D4FF] text-black",
    iconStyle: "text-[#AF52DE]",
  },
  info: {
    badgeStyle: "bg-[#D0F0FF] text-black",
    iconStyle: "text-[#32ADE6]",
  },
  warning: {
    badgeStyle: "bg-[#FFE7D1] text-black",
    iconStyle: "text-[#FFC69B]",
  },
  danger: {
    badgeStyle: "bg-[#FFC8C8] text-black",
    iconStyle: "text-[#FF8A8A]",
  },
  "light-green": {
    badgeStyle: "bg-[#C9FFEE] text-black",
    iconStyle: "text-black",
  },
});

const Badge = ({
  variant = "",
  label = "",
  icon: Icon = null,
  className = "",
  iconStyle = "",
  round = "rounded",
  onClick = null,
}) => {
  if (!(label || Icon)) return null;
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 ${
        variant && BadgeColorVariants[variant].badgeStyle
      } ${round} px-[0.5rem] py-[0.15rem] ${!label && "py-[0.4rem]"} ${
        onClick && "cursor-pointer"
      } ${className}`}
    >
      {Icon && (
        <Icon
          className={`${
            variant && BadgeColorVariants[variant].iconStyle
          } ${iconStyle}`}
        />
      )}
      {label && label}
    </div>
  );
};

export default Badge;
