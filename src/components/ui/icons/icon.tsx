import { AvailiableIcons } from "../../../types/icon";
import { ICONS } from "./icons-data"

type IconProps = {
  name: AvailiableIcons,
  width?: number,
  height?: number
};

const Icon = ({ name, height = 20, width = 20 }: IconProps) => {
  const icon = ICONS.find(icon => icon.name === name);

  if (icon) {
    return (
      <>
        <svg
          width={height}
          height={width}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          style={{ width, height, stroke: "currentcolor" }}
          dangerouslySetInnerHTML={{__html: icon.svg}}
        />
      </>
    )
  }

  return null;
}

export default Icon;