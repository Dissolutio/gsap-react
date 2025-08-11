import { FirstGsapAnimation } from "./FirstGsapAnimation"
import { TailwindCSSMobileLayoutExample } from "./LayoutExample"

function App() {

  return (
    <>
      <h1 className="text-3xl p-4 font-bold underline">
        Vite-React + TailwindCSS4 + GSAP
      </h1>
      <TailwindCSSMobileLayoutExample />
      <FirstGsapAnimation />
    </>
  )
}

export default App
