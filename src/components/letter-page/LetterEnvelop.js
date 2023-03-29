import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "./Hero";
import classes from "./LetterEnvelop.module.css";
import EnvelopContent from "./sub-comp/EnvelopContent";
const LetterEnvelop = ({ isLetterOpen, setIsLetterOpen }) => {
  const [open, setOpen] = useState(false);
  const openLetter = () => {
    setOpen(true);
    setTimeout(() => {
      setIsLetterOpen((prev) => !prev);
    }, 2500);
  };
  return (
    <div className={classes.container}>
      <div
        className={`${classes.envelopeWrapper} ${open && classes.flap}`}
        onClick={openLetter}
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
          <div class={`${classes.hearts} ${!open && classes.close}`}>
            <div class={`${classes.heart} ${classes.a1}`}></div>
            <div class={`${classes.heart} ${classes.a2}`}></div>
            <div class={`${classes.heart} ${classes.a3}`}></div>
            <div class={`${classes.heart} ${classes.a4}`}></div>
            <div class={`${classes.heart} ${classes.a5}`}></div>
            <div class={`${classes.heart} ${classes.a6}`}></div>
            <div class={`${classes.heart} ${classes.a7}`}></div>
            <div class={`${classes.heart} ${classes.a8}`}></div>
          </div>
        </div>
        <div className={classes.heartIcon}></div>
      </div>
    </div>
  );
};

export default LetterEnvelop;
