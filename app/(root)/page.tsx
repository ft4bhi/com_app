"use client"
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect, useState } from "react";
import React from "react";


export const SetUpPage = () => {

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  },[isOpen,onOpen])
  return (
    <div>
      <h1>Main Page Content</h1>
      
    </div>
  );
}

export default SetUpPage;
