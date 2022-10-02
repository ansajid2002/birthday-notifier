import React from "react"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import ConPro from "./context"

import ContextPro from "./contextlogin"
import Dalal from "./Dalal"
export default function App () {
  return (
    <BrowserRouter>
    <ConPro>
    <ContextPro>
      <Dalal/>
    </ContextPro>
    </ConPro>
    
    </BrowserRouter>   
  )
}