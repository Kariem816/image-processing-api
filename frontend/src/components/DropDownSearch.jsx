import { useState, useEffect } from "react"
import capitalize from "../utils/capitalize"
import { FaAngleLeft, FaSearch } from "react-icons/fa"

export default function DropDownSearch({ options, onChange, defaultOption, limit, submit }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(defaultOption ? defaultOption : "")
    const [query, setQuery] = useState("")

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

    const filteredOptions = options.filter(option => option.toLowerCase().includes(query.toLowerCase()))

    let dropDownChoices = []

    if (limit) {
        const limitedOptions = filteredOptions.filter((option, index) => index < limit)

        dropDownChoices = limitedOptions.map((option, index) => (
            <div key={`diff.${index}`} className={`drop-down-choice${selected === option ? " selected" : ""}`} onClick={() => handleSelect(option)}>
                {capitalize(option)}
            </div>
        ))
    } else {
        dropDownChoices = filteredOptions.map((option, index) => (
            <div key={`diff.${index}`} className={`drop-down-choice${selected === option ? " selected" : ""}`} onClick={() => handleSelect(option)}>
                {capitalize(option)}
            </div>
        ))
    }

    return (
        <div className="drop-down">
            <div className="drop-down-header">
                {
                    isOpen ?
                        <input
                            type="search"
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                            className="drop-down-selected"
                            autoFocus
                        />
                        :
                        <div className="drop-down-selected" onClick={handleClick}>
                            {selected === "" ? "---" : capitalize(selected)}
                        </div>
                }
                <button className={`drop-down-btn${isOpen ? " open" : ""}`} type="button" onClick={handleClick}>
                    <FaAngleLeft />
                </button>
            </div>
            <div className={`drop-down-choices ${isOpen ? "show-choices" : "hide-choices"}`}>
                {/* <div className="drop-down-choice disabled">
                    -
                </div> */}
                {
                    dropDownChoices.length > 0 ?
                        dropDownChoices
                        :
                        <div className="drop-down-choice disabled">
                            No items
                        </div>
                }
            </div>
        </div>
    )
}