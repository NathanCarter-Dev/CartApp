import {useState} from "react";

const UseToggleState = (val) => {
  const [value, setValue] = useState(val);

  const toggle = () => {

    setValue(!value)
  }

  return [value, toggle]
}

export default UseToggleState;