import type { Score } from "../types/score.type";

export const defaultScore : Score = {
  meta: {
    score: {
      description: "Sample Tonic Solfa Composition",
      measures: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
      key: {
        fifths: 0,
        mode: "major",
        signature: "C major",
      },
      time: {
        beats: 4,
        beatType: 4,
      },
      tempo: {
        baseNote: "quarter",
        bpm: 120,
        direction: {
          text: "Allegro",
          position: { x: 10, y: 10 },
          style: { fontSize: 14, fontWeight: "bold", textAlign: "center" },
        },
      },
    },
    identification: {
      author: "John Doe",
      rights: "Public Domain",
      source: "Original Composition",
      encoding: "UTF-8",
    },
  },

  page: {
    width: 210,
    height: 297,
    orientation: "portrait",
    margins: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    },
  },

  credits: {
    title: { text: "Tonic Solfa Composition", style: { fontSize: 18, fontWeight: "bold" } },
    subtitle: { text: "A Sample Work", style: { fontSize: 14, fontStyle: "italic" } },
    composer: { text: "John Doe", style: { fontSize: 12 } },
    lyricist: { text: "Jane Smith", style: { fontSize: 12 } },
  },

  textBlocks: [
    { text: "This is a sample tonic solfa composition", style: { fontSize: 12, color: "black", textAlign: "left" } },
  ],

  fonts: {
    noteFont: { fontFamily: "Arial", fontSize: 12, color: "black" },
    lyricFont: { fontFamily: "Times New Roman", fontSize: 12, color: "black" },
  },

  measures: [
    {
      number: 1,
      parts: [
        {
          partId: "part1",
          partName: "Soprano",
          instrument: {
            instrumentId: "inst1",
            instrumentName: "Piano",
          },
          notes: [
            {
              rest: false,
              duration: 1,
              pitch: { step: "C", octave: 4 },
              type: "quarter",
              offsetX: 10,
              offsetY: 20,
              lyric: { text: "Do", syllabic: "single" },
            },
            {
              rest: false,
              duration: 1,
              pitch: { step: "D", octave: 4 },
              type: "quarter",
              offsetX: 30,
              offsetY: 20,
              lyric: { text: "Re", syllabic: "single" },
            },
          ],
        },
        {
          partId: "part2",
          partName: "Alto",
          instrument: {
            instrumentId: "inst2",
            instrumentName: "Violin",
          },
          notes: [
            {
              rest: false,
              duration: 1,
              pitch: { step: "E", octave: 4 },
              type: "quarter",
              offsetX: 10,
              offsetY: 40,
              lyric: { text: "Mi", syllabic: "single" },
            },
          ],
        },
      ],
    },
    {
      number: 2,
      parts: [
        {
          partId: "part1",
          partName: "Soprano",
          instrument: {
            instrumentId: "inst1",
            instrumentName: "Piano",
          },
          notes: [
            {
              rest: false,
              duration: 1,
              pitch: { step: "F", octave: 4 },
              type: "quarter",
              offsetX: 10,
              offsetY: 20,
              lyric: { text: "Fa", syllabic: "single" },
            },
            {
              rest: false,
              duration: 1,
              pitch: { step: "G", octave: 4 },
              type: "quarter",
              offsetX: 30,
              offsetY: 20,
              lyric: { text: "Sol", syllabic: "single" },
            },
          ],
        },
        {
          partId: "part2",
          partName: "Alto",
          instrument: {
            instrumentId: "inst2",
            instrumentName: "Violin",
          },
          notes: [
            {
              rest: false,
              duration: 1,
              pitch: { step: "A", octave: 4 },
              type: "quarter",
              offsetX: 10,
              offsetY: 40,
              lyric: { text: "La", syllabic: "single" },
            },
          ],
        },
      ],
    },
    // Additional measures can be added here...
  ],
};