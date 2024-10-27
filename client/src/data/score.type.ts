interface Text {
  value: string,
  position : {
    x: number,
    y: number,
  }
  style: {
    fontSize: number,
    fontFamily: string,
    fontStyle: "normal" | "italic" | "oblique",
    fontWeight: "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
    color: string
    textDecoration: string,
    textAlign: "center" | "left" | "right",
  }
}

interface Font {
  fontFamily: string,
  fontSize: number,
  color: string
}

interface PartListItem {
  id: string,
  partName: string,
  partAbbreviation: string,
  instrument: {
    isntrumentId: string,
    instrumentName: string,
    instrumentSound: string,
    midiSettings: {
      deviceId: string,
      devicePort: number,
      program: number,
      channel: number,
      volume: number,
      pan: number
    }
  }
}

interface Note {

}


interface Measure {
  number: number,
  beats: {
    original: number,
    actual: number,
  }
  key: string,
  time: {
    beats: number,
    beatType: number,
    timeSignature: string
  },
  tempo: {
    baseNote: "quater" | "half" | "one" | "two" | "four",
    bpm: number,
  },
  style: {
    marginLeft: number,
    marginRight: number,
    marginTop: number,
    marginBottom: number
  },
  notes: Note[]
}


interface Part {
  id: string,
  measures: Measure[]
}

export interface Score {
  meta: {
    score: {
      title: string,
      description: string,
      createdAt: Date,
      updatedAt: Date,
      key: {
        fifths: number,
        mode: "major" | "minor",
        keySignature: string
      },
      timeSignature: {
        beats: number,
        beatType: number
      },
      tempo: {
        baseNote: "quater" | "half" | "one" | "two" | "four",
        bpm: number,
      }
    },
    identification: {
      author: string,
      rights: string, //Public domain
      source: string, //Original composition
      encoding: string //UTF-8
    }
  },

  pageLayout: {
    width: number,
    height: number,
    orientation: "portrait" | "landscape",
    margins: {
      top: number,
      bottom: number,
      left: number,
      right: number
    }
  },

  credits: {
    title: Text,
    subtitle: Text,
    composer: Text,
    lyricist: Text,
  },

  scoreTexts: Text[],

  fonts: {
    noteFont: Font,
    lyricFont: Font
  },

  partList: PartListItem[],

  parts: Part[]
}