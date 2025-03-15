import { PropsWithChildren } from "react";
import { AvailiableIcons } from "../../../types/icon";
import Icon from "../../icons/icon";

type InformationGroupProps = {
  icon: AvailiableIcons,
}

const InformationGroup = ({ icon, children }: PropsWithChildren<InformationGroupProps>) => {
  return (
    <div className="information-group">
      <Icon name={icon} height={20} width={20} />
      {children}
    </div>
  )
}

export default InformationGroup;
