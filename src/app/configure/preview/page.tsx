import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignPreview from "./DesignPreview";

interface PageProps {
  searchParams: URLSearchParams;
}

const Page = async ({ searchParams }: PageProps) => {
  const id = searchParams.get("id");

  if (!id) {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  return <DesignPreview configuration={configuration} />;
};

export default Page;
