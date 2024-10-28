interface Text {
  text: string;
  position?: {
    x?: number;
    y?: number;
  };
  style?: {
    fontSize?: number;
    fontFamily?: string;
    fontStyle?: "normal" | "italic" | "oblique";
    fontWeight?: "normal" | "bold" | "lighter" | 100 | 200 | 300 | 700;
    color?: string;
    textDecoration?: string;
    textAlign?: "center" | "left" | "right";
  };
}

interface Font {
  fontFamily?: string;
  fontSize?: number;
  color?: string;
}

interface PartListItem {
  partId: string;
  partName: string;
  partAbbreviation?: string;
  solo?: boolean;
  instrument: {
    instrumentId: string;
    instrumentName: string;
    instrumentSound?: string;
    midiSettings?: {
      deviceId?: string;
      devicePort?: number;
      program?: number;
      channel?: number;
      volume?: number;
      pan?: number;
    };
  };
}

interface NoteArticulation {
  type: "staccato" | "marcato" | "fermata" | "tenuto" | "accent" | "sforzando" | "mordent" | "trill" | "glissando";
  placement?: "above" | "below";
  offsetX?: number;
  offsetY?: number;
  distortion?: {
    notes: {
      duration: number;
      volume: number;
      pitch: {
        step: number;
        octave: number;
      };
    }[];
  };
}

interface Note {
  rest: boolean;
  duration: number;
  voice?: number;
  pitch?: {
    step: "C" | "D" | "E" | "F" | "G" | "A" | "B";
    alter?: 0 | 1 | -1;
    octave: number;
  };
  type: "quarter" | "half" | "whole" | "eighth" | "sixteenth";
  dotted?: boolean;
  beats?: number;
  maxBeats?: number;
  offsetX?: number;
  offsetY?: number;
  articulations?: NoteArticulation[];
  slur?: {
    placement?: "above" | "below";
    type: "start" | "center" | "end";
    offsetX?: number;
    offsetY?: number;
  };
  tie?: {
    type: "start" | "stop";
  };
  lyric?: {
    text: string;
    syllabic: "single" | "begin" | "end" | "continue";
    position?: {
      offsetX?: number;
      offsetY?: number;
      x?: number;
      y?: number;
    };
    style?: {
      fontStyle?: "normal" | "italic" | "oblique";
      fontWeight?: "normal" | "bold" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
      textDecoration?: string;
      textAlign?: "center" | "left" | "right";
    };
  };
}

interface Measure {
  number: number;
  measureNumberVisible?: boolean;
  repeat?: {
    times?: number;
    end?: boolean;
  };
  beats?: {
    original?: number;
    actual?: number;
    beatType?: number;
    grouping?: number;
  };
  timeSignature?: Text;
  key?: {
    fifths: number;
    mode: "major" | "minor";
    keySignature?: Text;
  };
  modulation?: boolean;
  tempo?: {
    bpm: number;
    annotation?: Text;
  };
  style?: {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    width?: number;
  };
  leftBarline?: "single" | "double" | "end" | "repeat-left" | "repeat-right" | "repeat-both";
  rightBarline?: "single" | "double" | "end" | "repeat-left" | "repeat-right" | "repeat-both";
  newSystem?: boolean;
  systemDistance?: number;
  volta?: {
    number?: number;
    type?: "start" | "center" | "end";
    closeEnd?: boolean;
  };
  textBlocks?: Text[];
  notes?: Note[];
}

interface Part {
  partId: string;
  measures: Measure[];
}

export interface Score {
  meta: {
    score: {
      description: string;
      measures?: number;
      createdAt?: Date;
      updatedAt?: Date;
      key?: {
        fifths?: number;
        mode?: "major" | "minor";
        signature?: string;
      };
      time?: {
        beats?: number;
        beatType?: number;
      };
      tempo?: {
        baseNote?: "quarter" | "half" | "whole" | "eighth" | "sixteenth";
        bpm?: number;
        direction?: Text;
      };
    };
    identification?: {
      author?: string;
      rights?: string;
      source?: string;
      encoding?: string;
    };
  };

  page: {
    width: number;
    height: number;
    orientation: "portrait" | "landscape";
    margins: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };

  credits?: {
    title?: Text;
    subtitle?: Text;
    composer?: Text;
    lyricist?: Text;
  };

  textBlocks?: Text[]; // Formerly scoreTexts
  fonts?: {
    noteFont?: Font;
    lyricFont?: Font;
  };
  partList: PartListItem[];
  parts: Part[];
}
