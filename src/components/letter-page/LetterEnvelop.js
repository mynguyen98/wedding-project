import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "./Hero";
import classes from "./LetterEnvelop.module.css";
import EnvelopContent from "./sub-comp/EnvelopContent";
const LetterEnvelop = ({ isLetterOpen, setIsLetterOpen }) => {
  //   const [open, setOpen] = useState(false);
  return (
    <div className={classes.container}>
      <div
        className={`${classes.envelopeWrapper} ${isLetterOpen && classes.flap}`}
        onClick={() => setIsLetterOpen((prev) => !prev)}
      >
        <div className={classes.envelope}>
          <div className={` overflow-hidden ${classes.letter}`}>
            <div className={classes.text}>
              {/* <strong>Dear Person.</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                labore omnis minus maiores laboriosam, facere in beatae esse.
              </p> */}
              <EnvelopContent />
            </div>
          </div>
        </div>
        <div className={classes.heart}></div>
      </div>
    </div>
  );
};

export default LetterEnvelop;
