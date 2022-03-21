import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import React, { useRef, useState } from 'react'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [symbol, setSymbol] = useState(faPlus)

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive(active === false ? true : false)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setSymbol(active ? faPlus : faMinus)
    //setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <div className="flex flex-col w-full items-center">
      <button
        className={`mt-6 py-3 border-b-2 border-gray-300 box-border appearance-none cursor-pointer hover:bg-gray-200 focus:outline-none flex items-center justify-between w-full ${active ? "bg-gray-300": "bg-gray-100"}`}
        onClick={toggleAccordion}
      >
        <h2 className="md:text-xl sm:text-lg pl-6 text-left w-full">{title}</h2>
        <FontAwesomeIcon className='mr-4' icon={symbol} size="lg"/>
      </button>
      <div
        ref={contentSpace}
        style={{ height: `${height}` }}
        className="overflow-hidden duration-700 ease-in-out w-full"
      > 
        <p className='p-3 pl-6 w-full md:text-xl sm:text-lg text-left mx-auto'>{content}</p>
      </div>
    </div>
  )
}

export default Accordion