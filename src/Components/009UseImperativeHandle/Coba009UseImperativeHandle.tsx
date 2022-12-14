import React, { useState, useRef, useCallback, useEffect } from "react";
import Parent from "./Parent";

const Coba009UseImpetiveHandle = () => {
  return <Display />;
};

function Display() {
  return (
    <>
      <div>009. UseImperativeHandle</div>
      <Parent />
    </>
  );
}

export default Coba009UseImpetiveHandle;
