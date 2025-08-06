import "ldrs/ring";
import { Hatch } from "ldrs/react";
import "ldrs/react/Hatch.css";
export default function Loader() {
  return (
    <>
      <div className="d-flex justify-content-center  align-items-center w-100 py-3 ">
        <div>
          <Hatch size="65" stroke="4" speed="2.5" color="white" />
        </div>
      </div>
    </>
  );
}
