import type { Note } from "@/types/score.type";

const pitchMap = {
  "C": "d",
  "D": "r",
  "E": "m",
  "F": "f",
  "G": "s",
  "A": "l",
  "B": "t"
}

const alteredUp = {
  "d" : "de",
  "r" : "re",
  "m" : "f",
  "f" : "fe",
  "s" : "se",
  "l" : "le",
  "t" : "d",
}

const alteredDown = {
  "d" : "t",
  "r" : "ra",
  "m" : "ma",
  "f" : "m",
  "s" : "ba",
  "l" : "la",
  "t" : "ta",
}

interface NoteGeneratorAttributes {
  solfa: string;
  computedOctave: number;
}

type BaseNote = "d" | "r" | "m" | "f" | "s" | "l" |"t";

export default function generateNote(note: Note): NoteGeneratorAttributes {
  if (!note.pitch) {
    return {
      solfa: "",
      computedOctave: 0
    }
  }
  const baseNote: BaseNote = pitchMap[note.pitch.step];

  let alteredNote;
  let computedOctave = note.pitch.octave;

  switch (note.pitch.alter) {
    case 1:
      alteredNote = alteredUp[baseNote];
      if (baseNote === "t") computedOctave += 1;
      break;

    case -1:
      alteredNote = alteredDown[baseNote];
      if (baseNote === "d") computedOctave -= 1;
      break;
  
    default: 
      alteredNote = baseNote
      break;
  }
  return {
    solfa: alteredNote,
    computedOctave,
  }
}