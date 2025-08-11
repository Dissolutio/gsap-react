import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export const FirstGsapAnimation = () => {
  gsap.registerPlugin(useGSAP);
  const boxRef = React.useRef()
  const containerRef = React.useRef()

  useGSAP(() => {
    gsap.to(boxRef.current, {
      rotation: "+=360",
      duration: 1
    });
  })

  useGSAP(() => {
    gsap.from(".box", { opacity: 0, stagger: 0.5, duration: 3 });
  }, { scope: containerRef }) // <-- scope

  return (
    <>
      <h2>Using a ref and useGSAP</h2>
      <div
        className='min-w-3/4 min-h-80 m-4 border border-white'>
        <BlueBoxDiv ref={boxRef}>
        </BlueBoxDiv>
      </div>
      <h2>Using a scoped ref + class selectors and useGSAP</h2>
      <div ref={containerRef} className='min-w-3/4 min-h-80 m-4 border border-white'>
        <BlueBoxDiv></BlueBoxDiv>
        <BlueBoxDiv></BlueBoxDiv>
        <BlueBoxDiv></BlueBoxDiv>
      </div>
    </>
  )
}

export const BlueBoxDiv = (props) => {
  return (
    <div
      {...props}
      className="box 
       w-[100px] h-[100px]
       bg-linear-to-r from-cyan-500 to-blue-500"
    ></div>
  )
}
