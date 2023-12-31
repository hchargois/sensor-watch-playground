'use client'

import React, { useEffect } from 'react';
import { PixelsProvider, usePixels } from './pixels_reducer';
import { Display } from './display';

export default function App() {
  return <PixelsProvider>
    <Home />
  </PixelsProvider>
}

function Home() {
  const [pixels, dispatch] = usePixels()

  useEffect(() => {
    dispatch({ type: "preset", preset: "time" })
  }, [dispatch])

  return (
    <body className="flex justify-center">
      <main className="font-mono flex max-w-screen-md min-h-screen flex-col p-4 gap-8 md:p-12">
        <div className="flex flex-col md:flex-row w-full gap-1">
          <div className="flex flex-row w-full gap-1">
            <ShortcutButton onClick={() => dispatch({ type: "preset", preset: "positions" })} >positions</ShortcutButton>
            <ShortcutButton onClick={() => dispatch({ type: "preset", preset: "time" })} >current time</ShortcutButton>
          </div>
          <div className="flex flex-row w-full gap-1">
            <ShortcutButton onClick={() => dispatch({ type: "preset", preset: "all_on" })} >all on</ShortcutButton>
            <ShortcutButton onClick={() => dispatch({ type: "preset", preset: "all_off" })} >all off</ShortcutButton>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex flex-col tracking-[.25em]">
            <p
              className="font-mono pl-1"
            >0123456789</p>
            <InputDisplayString
              value={pixels.dispStr}
              onChange={(disp) => dispatch({ type: "disp_str", disp })}
            />
          </div>
          <div className="flex flex-row gap-1">
            <InputIndicator pixel="0,17" label="sig." />
            <InputIndicator pixel="0,16" label="bell" />
            <InputIndicator pixel="2,17" label="PM" />
            <InputIndicator pixel="2,16" label="24H" />
            <InputIndicator pixel="1,10" label="LAP" />
            <InputIndicator pixel="1,16" label=":" />
          </div>
        </div>

        <Display />

        <HoveredPixelDesc />

        <PixelsTable />

        <About />
      </main>
    </body>
  )
}

type ShortcutButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

function ShortcutButton(props: ShortcutButtonProps) {
  let className = `accent-gray-500 shadow border-solid border
  rounded border-gray-500 flex-1 flex flex-col justify-between items-center p-1 md:p-2
  select-none shadow-md active:bg-gray-300 active:shadow-gray-400 active:shadow-inner`

  return <button className={className} onClick={props.onClick}>
    {props.children}
  </button>
}
function range(to: number): number[] {
  return Array.from(Array(to).keys())
}

function PixelsTable() {
  const [pixels, dispatch] = usePixels()

  const onMouseEnter = (pixel: string) => { dispatch({ type: "hover", pixel }) }
  const onMouseLeave = () => { dispatch({ type: "hover", pixel: null }) }

  // com [0-2]
  // seg [0-23]
  return <table className="table-fixed w-full">
    <thead>
      <tr>
        <td></td>
        {range(24).map((i) => {
          let columnName = null
          if (i < 10) {
            columnName = <><br></br>{i}</>
          } else {
            columnName = <>{~~(i / 10)}<br></br>{i % 10}</>
          }
          return <th key={i} scope="col" className="border border-gray-500">
            {columnName}
          </th>
        })}
      </tr >
    </thead>
    <tbody>
      {range(3).map((com) => {
        return <tr key={com}>
          <th scope="row" className="border border-gray-500">{com}</th>
          {range(24).map((seg) => {
            const pixel = `${com},${seg}`
            let bg = ""
            if (pixels.hovered == pixel) {
              bg = "bg-amber-600"
            } else if (pixels.on.has(pixel)) {
              bg = "bg-neutral-800"
            }
            return <td
              key={pixel}
              className={"border border-gray-500 " + bg}
              onMouseEnter={() => onMouseEnter(pixel)}
              onMouseLeave={onMouseLeave}
            > </td>
          })}
        </tr>
      })}

    </tbody>
  </table >
}

function HoveredPixelDesc() {
  const [pixels, _] = usePixels()

  let com = ""
  let seg = ""
  if (pixels.hovered) {
    [com, seg] = pixels.hovered.split(',')
  }

  return <p
    className={`text-center ${pixels.hovered?"visible":"invisible"}`}
  >
    com <b>{com}</b> / seg <b>{seg}</b>
  </p>
}

type InputDisplayStringProps = {
  value: string
  onChange: (value: string) => void
}

function InputDisplayString(props: InputDisplayStringProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value)
  }

  return <input
    className="border border-gray-500 font-mono tracking-[.25em] pl-1"
    type="text"
    spellCheck="false"
    value={props.value}
    onChange={handleChange}
  />
}

type InputIndicatorProps = {
  label: string
  pixel: string
}

function InputIndicator(props: InputIndicatorProps) {
  const [pixels, dispatch] = usePixels()
  const checked = pixels.on.has(props.pixel)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "set", pixel: props.pixel, on: event.target.checked })
  }

  let className = `w-12 h-12 md:w-16 md:h-16 accent-gray-500 shadow border-solid border
  rounded border-gray-500 flex flex-col justify-between items-center p-2
  select-none active:bg-gray-300 active:shadow-gray-400 active:shadow-inner`

  if (checked) {
    className += " bg-gray-300 shadow-gray-400 shadow-inner"
  } else {
    className += " shadow-md"
  }

  return <label className={className}>
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
    />
    <p>{props.label}</p>
  </label>
}

function About() {
  return <div className="text-gray-600 text-justify">
    <h2 className="font-bold">What is this?</h2>
    <p>
      This web app replicates the LCD display of the Casio F-91W watch.
      Its goal is to help with developing new features on the
      {' '}<Link href="https://www.sensorwatch.net/">Sensor&nbsp;Watch</Link>,
      a programmable, ARM-based microcontroller board that replaces the watch&apos;s original board.
    </p>
    <p>
      The display primarily consists of 7-segment digits, but there are a lot of exceptions,
      such as digits where multiple segments are tied together.
      These quirks create various limitations on the characters that can be displayed in each position.
    </p>
    <p>
      For the developer, that means having to reword, move things around, or otherwise find creative ways
      to display legible information. The live preview on this page facilitates this process,
      and avoids having to compile and load a new firmware just to test things out.
    </p>
    <h2 className="font-bold mt-4">Links</h2>
    <ul className="list-disc list-inside">
      <li><Link href="https://www.sensorwatch.net/">Sensor Watch home page</Link></li>
      <li><Link href="https://www.sensorwatch.net/docs/wig/display/">Sensor Watch display guidelines</Link></li>
      <li><Link href="https://github.com/hchargois/sensor-watch-playground">Source code of this page (GitHub)</Link></li>
    </ul>
  </div>
}

type LinkProps = {
  href: string
  children: React.ReactNode
}

function Link(props: LinkProps) {
  return <a
    className="underline"
    href={props.href}
  >
    {props.children}
  </a>
}
