# Sensor Watch display playground

## Try it!

https://hchargois.github.io/sensor-watch-playground/

## What is this?

This web app replicates the LCD display of the Casio F-91W watch. Its goal is to help with developing new features on the Sensor Watch, a programmable, ARM-based microcontroller board that replaces the watch's original board.

The display primarily consists of 7-segment digits, but there are a lot of exceptions, such as digits where multiple segments are tied together. These quirks create various limitations on the characters that can be displayed in each position.

For the developer, that means having to reword, move things around, or otherwise find creative ways to display legible information. The live preview on this page facilitates this process, and avoids having to compile and load a new firmware just to test things out.
