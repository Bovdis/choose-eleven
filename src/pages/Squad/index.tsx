import React, { FC } from "react";
import useStores from "../../stores/useStores";

const Squad: FC = () => {
  const {
    usersStore: { currentUser },
  } = useStores();

  return <div></div>;
};

export default Squad;
