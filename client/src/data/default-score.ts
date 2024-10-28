import type { Score } from "../types/score.type";

export const defaultScore : Score = {
  meta: {
    score: {
      description: "Sample Tonic Solfa Composition",
      measures: 4,
      createdAt: new Date("2024-10-26"),
      updatedAt: new Date("2024-10-26"),
      key: {
        fifths: 0,  // C major/A minor
        mode: "major",
        signature: "C"
      },
      time: {
        beats: 4,
        beatType: 4
      },
      tempo: {
        baseNote: "quarter",
        bpm: 120,
        direction: {
          text: "Allegro",
          position: { x: 10, y: 20 },
          style: {
            fontSize: 14,
            fontFamily: "Arial",
            color: "black",
            textAlign: "center"
          }
        }
      }
    },
    identification: {
      author: "John Doe",
      rights: "Public domain",
      source: "Original composition",
      encoding: "UTF-8"
    }
  },

  page: {
    width: 595,
    height: 842,
    orientation: "portrait",
    margins: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20
    }
  },

  credits: {
    title: { text: "My First Tonic Solfa", position: { x: 0, y: 10 } },
    subtitle: { text: "A Simple Composition", position: { x: 0, y: 30 } },
    composer: { text: "John Doe", position: { x: 0, y: 50 } },
    lyricist: { text: "Jane Smith", position: { x: 0, y: 70 } }
  },

  textBlocks: [
    {
      text: "Dynamic Change: Crescendo",
      position: { x: 15, y: 200 },
      style: {
        fontSize: 10,
        fontFamily: "Arial",
        color: "gray",
        fontWeight: "bold"
      }
    }
  ],

  fonts: {
    noteFont: { fontFamily: "Arial", fontSize: 12, color: "black" },
    lyricFont: { fontFamily: "Times New Roman", fontSize: 10, color: "blue" }
  },

  partList: [
    {
      partId: "p1",
      partName: "Melody",
      partAbbreviation: "Mel",
      solo: true,
      instrument: {
        instrumentId: "i1",
        instrumentName: "Piano",
        instrumentSound: "acoustic_grand_piano",
        midiSettings: {
          deviceId: "dev1",
          devicePort: 1,
          program: 1,
          channel: 1,
          volume: 100,
          pan: 64
        }
      }
    }
  ],

  parts: [
    {
      partId: "p1",
      measures: [
        {
          number: 1,
          measureNumberVisible: true,
          beats: {
            original: 4,
            actual: 4,
            beatType: 4,
            grouping: 2
          },
          timeSignature: { text: "4/4" },
          key: {
            fifths: 0,
            mode: "major",
            keySignature: { text: "C Major" }
          },
          modulation: false,
          tempo: {
            bpm: 120,
            annotation: { text: "Allegro", position: { x: 0, y: 15 } }
          },
          style: {
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
            marginBottom: 10,
            width: 200
          },
          leftBarline: "single",
          rightBarline: "repeat-right",
          newSystem: false,
          repeat: { times: 2, end: false },
          textBlocks: [{ text: "Intro", position: { x: 20, y: 40 } }],
          notes: [
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: { step: "C", alter: 0, octave: 4 },
              type: "quarter",
              dotted: false,
              beats: 1,
              maxBeats: 4,
              offsetX: 10,
              offsetY: 20,
              articulations: [{ type: "staccato", placement: "above", offsetX: 2, offsetY: -2 }],
              lyric: {
                text: "La",
                syllabic: "single",
                position: { offsetX: 5, offsetY: 10 },
                style: { fontStyle: "italic", fontWeight: "normal", textDecoration: "none", textAlign: "center" }
              }
            },
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: { step: "D", alter: 0, octave: 4 },
              type: "quarter",
              dotted: false,
              beats: 1,
              maxBeats: 4,
              offsetX: 30,
              offsetY: 20,
              articulations: [{ type: "marcato", placement: "below", offsetX: 0, offsetY: 3 }],
              lyric: {
                text: "Sol",
                syllabic: "single",
                position: { x: 30, y: 60 },
                style: { fontStyle: "italic", fontWeight: "bold", textDecoration: "underline", textAlign: "center" }
              }
            }
          ]
        },
        {
          number: 2,
          measureNumberVisible: true,
          beats: { original: 4, actual: 4, beatType: 4, grouping: 2 },
          timeSignature: { text: "4/4" },
          key: { fifths: 0, mode: "major", keySignature: { text: "C Major" } },
          modulation: false,
          tempo: { bpm: 120, annotation: { text: "Allegro" } },
          style: { marginLeft: 5, marginRight: 5, marginTop: 10, marginBottom: 10, width: 200 },
          leftBarline: "repeat-left",
          rightBarline: "double",
          newSystem: true,
          textBlocks: [{ text: "Verse", position: { x: 15, y: 25 } }],
          notes: [
            {
              rest: true,
              duration: 1,
              voice: 1,
              type: "quarter",
              dotted: false,
              beats: 1,
              maxBeats: 4,
              offsetX: 10,
              offsetY: 15,
              articulations: [],
              lyric: {
                text: "",
                syllabic: "single",
                style: { fontStyle: "normal", fontWeight: "normal", textDecoration: "none", textAlign: "center" }
              }
            },
            {
              rest: false,
              duration: 2,
              voice: 1,
              pitch: { step: "E", alter: 0, octave: 4 },
              type: "half",
              dotted: false,
              beats: 2,
              maxBeats: 4,
              offsetX: 30,
              offsetY: 25,
              articulations: [{ type: "tenuto", placement: "above", offsetX: 0, offsetY: -1 }],
              lyric: {
                text: "Mi",
                syllabic: "single",
                position: { offsetX: 5, offsetY: 12 },
                style: { fontStyle: "normal", fontWeight: "bold", textDecoration: "none", textAlign: "center" }
              }
            }
          ]
        }
      ]
    }
  ]
};