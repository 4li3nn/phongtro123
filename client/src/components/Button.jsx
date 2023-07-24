/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

function Button({
  children,
  textColor,
  bgColor,
  IconAfter,
  onClick,
  fullWidth,
}) {
  return (
    <button
      type="button"
      className={`p-2 ${textColor} ${bgColor} ${
        fullWidth && "w-full"
      } outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      {children}
      {IconAfter && (
        <span>
          <IconAfter />
        </span>
      )}
    </button>
  );
}

export default memo(Button);
