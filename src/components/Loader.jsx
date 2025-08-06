import "ldrs/ring";
import { Hatch } from "ldrs/react";
import "ldrs/react/Hatch.css";
export default function Loader() {
  return (
    <>
      <div className="d-flex justify-content-center w-100">
        <Hatch size="65" stroke="4" speed="3.5" color="black" />
      </div>
    </>
  );
}
