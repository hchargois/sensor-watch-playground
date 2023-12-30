import { usePixels } from './pixels_reducer';

export function Display() {
  return <svg
    viewBox="0 0 1000 535"
    style={{ fill: "#262626" }}
  >
    <Frame />

    <Signal />
    <Bell />
    <PM />
    <I24H />
    <Lap />

    <Position0 />
    <Position1 />

    <Position2 />
    <Position3 />

    <Position4 />
    <Position5 />

    <Colon />

    <Position6 />
    <Position7 />

    <Position8 />
    <Position9 />
  </svg>
}

function Frame() {
  return <rect
    style={{ fill: "none", stroke: "#333", strokeWidth: 2 }}
    id="frame"
    width="998"
    height="533"
    x="1"
    y="1"
    rx="40"
    ry="40" />
}


function Bell() {
  return <Pixel pixel="0,16" mousebbox={true}>
    <path
      id="alarm"
      d="m 241,63 v 7 c -10,0 -16,2 -16,10 v 19 c 0,5 -1,7 -7,7 v 7 h 22 c -4,5 -1,14 5,14 6,0 9,-9 5,-14 h 22 v -7 c -6,0 -7,-2 -7,-7 V 80 c 0,-8 -6,-10 -16,-10 v -7 z m 12,15 c 0,0 3,0 3,3 l 2,24 h -26 l 2,-24 c 0,-3 3,-3 3,-3 z"
    />
  </Pixel>
}

function Signal() {
  return <Pixel pixel="0,17" mousebbox={true}>
    <g id="signal">
      <path
        id="signal_1"
        d="m 90,113 c 0,0 7,-9 7,-21 C 97,80 90,72 90,72 H 76 v 41 z"
      />
      <path
        id="signal_2"
        d="m 113,113 c 0,0 6,-8 6,-20 0,-12 -6,-21 -6,-21 h -12 c 0,0 6,9 6,21 0,12 -6,20 -6,20 z"
      />
      <path
        id="signal_3"
        d="m 136,113 c 0,0 4,-9 4,-20 0,-12 -4,-21 -4,-21 h -12 c 0,0 4,10 4,21 0,12 -4,20 -4,20 z"
      />
      <path
        id="signal_4"
        d="m 157,113 c 0,0 3,-8 3,-20 0,-12 -3,-21 -3,-21 h -10 c 0,0 3,9 3,21 0,13 -3,20 -3,20 z"
      />
      <path
        id="signal_5"
        d="m 178,113 c 0,0 3,-7 3,-20 0,-13 -3,-21 -3,-21 h -9 c 0,0 3,9 3,21 0,12 -3,20 -3,20 z"
      />
    </g>
  </Pixel>
}

function PM() {
  return <Pixel pixel="2,17" mousebbox={true}>
    <path
      id="pm"
      d="m 82,190 h 10 v -18 h 12 c 0,0 15,0 15,-16 0,-17 -15,-17 -15,-17 H 82 Z m 10,-42 h 11 c 0,0 7,0 7,8 0,8 -6,8 -6,8 H 92 Z m 62,42 9,-38 v 38 h 10 v -51 h -14 l -9,40 -9,-40 h -14 v 51 h 10 v -38 l 9,38 z"
    />
  </Pixel>
}

function I24H() {
  return <Pixel pixel="2,16" mousebbox={true}>
    <g id="timemode_24H">
      <path
        d="m 227,190 h -27 v -6 c 0,-7 5,-9 10,-12 5,-3 11,-5 11,-9 0,-4 -1,-7 -7,-7 -6,0 -8,4 -8,9 h -6 c 0,-9 5,-15 14,-15 10,0 13,5 13,13 0,8 -8,11 -12,13 -4,2 -8,4 -8,8 h 20 z"
        id="timemode24_2"
      />
      <path
        d="m 257,176 h 4 v 6 h -4 v 8 h -6 v -8 h -19 v -9 l 16,-23 H 257 Z m -6,-20 -14,20 h 14 z"
        id="timemode24_4"
      />
      <path
        d="m 298,190 h -6 v -17 h -17 v 17 h -6 v -40 h 6 v 17 h 17 v -17 h 6 z"
        id="timemode24_h"
      />
    </g>
  </Pixel>
}

function Position0() {
  return <g id="pos0">
    <Pixel pixel="0,13">
      <path
        id="pos0_A"
        d="m 416,83 h -30 l -11,-14 c 0,0 -2,-3 3,-3 h 47 z"
      />
    </Pixel>

    <Pixel pixel="1,13">
      <path
        id="pos0_B"
        d="m 429,70 c 3,-5 8,0 7,20 -1,19 0,31 -9,28 -3,-2 -9,-7 -9,-7 l 1,-23 z"
      />
    </Pixel>

    <Pixel pixel="2,13">
      <path
        id="pos0_C"
        d="m 422,178 c 2,0 10,-4 10,-11 l 2,-36 c 0,-10 -4,-10 -4,-10 l -13,10 -1,28 z"
      />
    </Pixel>

    <Pixel pixel="2,15">
      <path
        id="pos0_D"
        d="m 383,161 h 28 l 6,18 h -47 c -14,-6 2,-11 13,-18 z"
      />
    </Pixel>

    <Pixel pixel="2,14">
      <path
        id="pos0_E"
        d="m 363,168 c 0,0 0,-26 1,-38 2,-9 6,-6 6,-6 l 11,8 -1,27 z"
      />
    </Pixel>

    <Pixel pixel="0,14">
      <path
        id="pos0_F"
        d="m 370,70 c -5,2 -5,28 -5,38 0,8 5,8 5,8 l 12,-8 V 83 Z"
      />
    </Pixel>

    <Pixel pixel="1,15">
      <path
        id="pos0_G"
        d="m 382,128 h 7 l 8,-4 9,4 h 6 l 11,-8 -10,-7 h -6 l -8,5 -8,-5 h -9 l -11,7 z"
      />
    </Pixel>

    <Pixel pixel="1,14">
      <path
        id="pos0_H"
        d="m 392,86 h 16 l -1,23 -8,5 -8,-5 z"
      />
      <path
        id="pos0_I"
        d="m 405,159 h -16 l 1,-27 8,-4 8,4 z"
      />
    </Pixel>

    <Pixel pixel="0,15">
      <path
        id="pos0_J"
        d="m 346,161 h 11 c 0,5 1,13 5,18 h -29 c -2,-6 14,-18 14,-18 z"
      />
    </Pixel>
  </g>
}

function Position1() {
  return <g id="pos1" >
    <Pixel pixel="0,11">
      <path
        id="pos1_A"
        d="m 521,83 h -31 l -12,-14 c 0,0 0,-3 5,-3 h 47 z"
      />
    </Pixel>

    <Pixel pixel="1,11">
      <path
        id="pos1_B"
        d="m 534,70 c 3,-5 8,0 7,20 -1,19 0,31 -9,28 -3,-2 -9,-7 -9,-7 l 1,-23 z"
      />
      <path
        id="pos1_C"
        d="m 526,178 c 2,0 10,-4 10,-11 l 2,-36 c 0,-10 -4,-10 -4,-10 l -13,10 -1,28 z"
      />
    </Pixel>

    <Pixel pixel="2,11">
      <path
        id="pos1_D"
        d="m 488,161 h 28 l 6,18 h -47 c -14,-6 2,-11 13,-18 z"
      />
    </Pixel>

    <Pixel pixel="1,12">
      <path
        id="pos1_E"
        d="M 466 168 c 0,0 0,-26 1,-38 2,-9 6,-6 6,-6 l 11,8 -1,27 z"
      />
      <path
        id="pos1_F"
        d="M 473 70 c -5,2 -5,28 -5,38 0,8 5,8 5,8 l 12,-8 V 83 Z"
      />
    </Pixel>

    <Pixel pixel="2,12">
      <path
        id="pos1_G"
        d="m 487,128 h 30 l 11,-8 -10,-7 h -31 l -11,7 z"
      />
    </Pixel>

    <Pixel pixel="0,12">
      <path
        id="pos1_H"
        d="m 441,66 h 30 c 0,0 -5,0 -5,17 h -16"
      />
    </Pixel>
  </g>

}

function Lap() {
  return <Pixel pixel="1,10" mousebbox={true}>
    <g id="lap" >
      <path
        id="lap_l"
        d="m 616,172 h 24 v 9 h -34 V 133 h 10 z"
      />
      <path
        id="lap_a"
        d="m 657,171 -3,10 h -11 l 18,-48 h 10 l 18,48 h -11 l -3,-10 z m 9,-27 -6,19 h 12 z"
      />
      <path
        id="lap_p"
        d="m 695,133 h 25 c 0,0 12,0 12,16 0,16 -12,16 -12,16 h -15 v 16 h -10 z m 20,23 c 0,0 8,0 8,-7 0,-7 -8,-7 -8,-7 h -10 v 14 z"
      />
    </g>
  </Pixel>
}

function Position2() {
  return <g id="pos2" >
    <Pixel pixel="1,9">
      <path
        id="pos2_A"
        d="m 816,87 h -37 l -13,-16 c 0,0 0,-4 5,-4 h 56 z"
      />
      <path
        id="pos2_D"
        d="m 775,178 h 35 l 7,21 h -57 c -17,-8 1,-13 15,-21 z"
      />
      <path
        id="pos2_G"
        d="m 774,139 h 39 l 13,-9 -13,-9 h -35 l -14,10 z"
      />
    </Pixel>

    <Pixel pixel="0,9">
      <path
        id="pos2_B"
        d="m 830,70 c 4,-5 9,1 8,24 -1,23 0,37 -10,33 -4,-3 -11,-8 -11,-8 l 1,-26 z"
      />
    </Pixel>

    <Pixel pixel="2,9">
      <path
        id="pos2_C"
        d="m 822,198 c 0,0 9,0 12,-14 l 2,-42 c 0,-12 -5,-11 -5,-11 l -15,11 -1,32 z"
      />
    </Pixel>

    <Pixel pixel="0,10">
      <path
        id="pos2_E"
        d="m 752,187 c 0,0 -0,-30 2,-45 2,-10 7,-7 7,-7 l 13,9 -1,31 z"
      />
    </Pixel>
  </g>
}

function Position3() {
  return <g id="pos3" >
    <Pixel pixel="0,7">
      <path
        id="pos3_A"
        d="m 919,87 h -37 l -13,-16 c 0,0 0,-4 5,-4 h 56 z"
      />
    </Pixel>

    <Pixel pixel="1,7">
      <path
        id="pos3_B"
        d="m 933,70 c 4,-5 9,1 8,24 -1,23 0,37 -10,33 -4,-3 -11,-8 -11,-8 l 1,-26 z"
      />
    </Pixel>

    <Pixel pixel="2,7">
      <path
        id="pos3_C"
        d="m 925,198 c 0,0 9,0 12,-14 l 2,-42 c 0,-12 -5,-11 -5,-11 l -15,11 -1,32 z"
      />
    </Pixel>

    <Pixel pixel="2,6">
      <path
        id="pos3_D"
        d="m 878,178 h 35 l 7,21 h -57 c -17,-8 1,-13 15,-21 z"
      />
    </Pixel>

    <Pixel pixel="2,8">
      <path
        id="pos3_E"
        d="m 855,187 c 0,0 -0,-30 2,-45 2,-10 7,-7 7,-7 l 13,9 -1,31 z"
      />
    </Pixel>

    <Pixel pixel="0,8">
      <path
        id="pos3_F"
        d="m 864,72 c -5,3 -6,33 -6,45 -0,9 7,9 7,9 l 13,-9 0,-30 z"
      />
    </Pixel>

    <Pixel pixel="1,8">
      <path
        id="pos3_G"
        d="m 877,139 h 39 l 13,-9 -13,-9 h -35 l -14,10 z"
      />
    </Pixel>
  </g>
}

function Position4() {
  return <g id="pos4" >
    <Pixel pixel="1,18">
      <path
        id="pos4_A"
        d="m 142,275 h -26 l -26,-30 c 0,0 -3,-6 10,-6 h 62 z"
      />
      <path
        id="pos4_D"
        d="m 108,438 h 26 l 13,38 h -65 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="2,19">
      <path
        id="pos4_B"
        d="m 169,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="0,19">
      <path
        id="pos4_C"
        d="m 156,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,18">
      <path
        id="pos4_E"
        d="m 64,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="2,18">
      <path
        id="pos4_F"
        d="m 80,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,19">
      <path
        id="pos4_G"
        d="m 103,368 h 37 l 21,-17 -20,-15 h -37 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position5() {
  return <g id="pos5" >
    <Pixel pixel="2,20">
      <path
        id="pos5_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="2,21">
      <path
        id="pos5_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="1,21">
      <path
        id="pos5_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,21">
      <path
        id="pos5_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="0,20">
      <path
        id="pos5_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="1,17">
      <path
        id="pos5_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,20">
      <path
        id="pos5_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Colon() {
  return <g id="colon" >
    <Pixel pixel="1,16">
      <circle cx="380" cy="306" r="17" />
      <circle cx="375" cy="408" r="17" />
    </Pixel>
  </g>
}

function Position6() {
  return <g id="pos6" transform="translate(206)">
    <Pixel pixel="0,22">
      <path
        id="pos6_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
      <path
        id="pos6_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="2,23">
      <path
        id="pos6_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="0,23">
      <path
        id="pos6_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="1,22">
      <path
        id="pos6_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="2,22">
      <path
        id="pos6_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,23">
      <path
        id="pos6_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position7() {
  return <g id="pos7" transform="translate(362)">
    <Pixel pixel="2,1">
      <path
        id="pos7_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="2,10">
      <path
        id="pos7_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="0,1">
      <path
        id="pos7_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,0">
      <path
        id="pos7_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="1,0">
      <path
        id="pos7_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="2,0">
      <path
        id="pos7_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,1">
      <path
        id="pos7_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position8() {
  return <g id="pos8" transform="matrix(0.78, 0, 0, 0.78, 568, 105)">
    <Pixel pixel="2,2">
      <path
        id="pos8_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="2,3">
      <path
        id="pos8_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="0,4">
      <path
        id="pos8_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,3">
      <path
        id="pos8_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="0,2">
      <path
        id="pos8_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="1,2">
      <path
        id="pos8_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,3">
      <path
        id="pos8_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position9() {
  return <g id="pos9" transform="matrix(0.78, 0, 0, 0.78, 680, 105)">
    <Pixel pixel="2,4">
      <path
        id="pos9_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="2,5">
      <path
        id="pos9_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="1,6">
      <path
        id="pos9_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,6">
      <path
        id="pos9_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="0,5">
      <path
        id="pos9_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="1,4">
      <path
        id="pos9_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,5">
      <path
        id="pos9_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

type PixelProps = {
  pixel: string
  children: React.ReactNode
  // use the bounding box to set the hovering status, useful for indicators
  // that have thin strokes/letters and "gaps" between them; but this can't be
  // the default as it would behave weirdly on digit positions
  mousebbox?: boolean
}

function Pixel(props: PixelProps) {
  const [pixels, dispatch] = usePixels()

  const onMouseEnter = () => { dispatch({ type: "hover", pixel: props.pixel }) }
  const onMouseLeave = () => { dispatch({ type: "hover", pixel: null }) }

  const isHovered = pixels.hovered == props.pixel
  const isOn = pixels.on.has(props.pixel)

  let style: any = {}
  if (isHovered) {
    style = { fill: "#d97706" }
  }

  if (isHovered || isOn) {
    return <g
      pointerEvents={props.mousebbox ? "bounding-box" : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      {props.children}
    </g>
  }
}
