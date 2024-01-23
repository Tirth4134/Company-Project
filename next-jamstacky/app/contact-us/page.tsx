import Form_contact from "@/components/Form_contact";
import LetsChat_home from "@/components/LetsChat_home";
import React from "react";

const page = () => {
  return (
    <div className="bg-gradient">
      <LetsChat_home />
      <Form_contact />
    </div>
  );
};

export default page;
