import { useState, useEffect } from "react"
import capitalize from "../utils/capitalize"
import { FaAngleLeft } from "react-icons/fa"

export default function DropDown({ options, onChange, defaultOption, submit }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(defaultOption || "")

    useEffect(() => {
        submit()
    }, [selected])

    function handleClick() {
        setIsOpen(prev => !prev)
    }

    function handleSelect(option) {
        setSelected(option)
        onChange(prevData => ({
            ...prevData,
            name: option
        }))
        setIsOpen(false)
    }

    const dropDownChoices = options.map((option, index) => (
        <div key={`diff.${index}`} className={`drop-down-choice${selected === option ? " selected" : ""}`} onClick={() => handleSelect(option)}>
            {capitalize(option)}
        </div>
    ))

    return (
        <div className="drop-down">
            <div className="drop-down-header" onClick={handleClick}>
                <div className="drop-down-selected">
                    {selected === "" ? "---" : capitalize(selected)}
                </div>
                <button className={`drop-down-btn${isOpen ? " open" : ""}`} type="button">
                    <FaAngleLeft />
                </button>
            </div>
            <div className={`drop-down-choices ${isOpen ? "show" : "hide"}-choices`}>
                {/* <div className="drop-down-choice disabled">
                    -
                </div> */}
                {dropDownChoices}
            </div>
        </div>
    )
}