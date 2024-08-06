"use client";

import { Path } from "@/navigations/routes";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NotFoundScreen = () => {
  const { push } = useRouter();
  useEffect(() => {
    push(Path.Home);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default NotFoundScreen;
