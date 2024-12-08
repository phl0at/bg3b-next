import React from "react";

const BuildLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="w-screen h-screen fixed left-[21%] top-0 py-3 gap-4 flex items-center">
        {children}
      </main>
    </>
  );
};

export default BuildLayout;
