"use client";

import React from "react";

function Page(ctx) {
  console.log(ctx.params.id);
  return <div>Page</div>;
}

export default Page;
