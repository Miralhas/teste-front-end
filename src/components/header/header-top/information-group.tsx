import { PropsWithChildren } from "react";
import { AvailiableIcons } from "../../../types/icon";
import Icon from "../../ui/icons/icon";
import styles from "./header-top.module.scss";

type InformationGroupProps = {
  icon: AvailiableIcons,
}

const InformationGroup = ({ icon, children }: PropsWithChildren<InformationGroupProps>) => {
  return (
    <div className={styles["information-group"]}>
      <Icon name={icon} height={20} width={20} />
      {children}
    </div>
  )
}

export default InformationGroup;
