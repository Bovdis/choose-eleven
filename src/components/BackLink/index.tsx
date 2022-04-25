import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

interface BackLinkProps {
  href: string;
  icon: IconDefinition;
  linkText?: string;
  passedClassName?: string;
}

const BackLink = ({ href, icon, linkText, passedClassName }: BackLinkProps) => {
  return (
    <Link className={passedClassName} to={href}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span>{linkText}</span>
    </Link>
  );
};

export default BackLink;
