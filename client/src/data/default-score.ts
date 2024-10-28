import type { Score } from "../types/score.type";

export const defaultScore : Score = {
  meta: {
    score: {
      description: "A sample score demonstrating basic features",
      measures: 2,
      key: {
        fifths: 0,
        mode: "major",
        signature: "C Major",
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
          offsetX: 10,
          offsetY: 10,
          fontSize: 12,
          fontFamily: "Arial",
          fontStyle: "normal",
          fontWeight: "bold",
          color: "#000",
          textDecoration: "none",
          textAlign: "center",
        },
      },
    },
    identification: {
      author: "Simon Chikezie Amalagu",
      rights: "Public Domain",
    },
  },
  page: {
    width: 595,
    height: 842 ,
    orientation: "portrait",
    margins: {
      top: 25,
      bottom: 25,
      left: 25,
      right: 25,
    },
  },
  credits: {
    title: {
      text: "Sample Score",
      offsetX: 0,
      offsetY: 0,
      fontSize: 24,
      fontFamily: "Times New Roman",
      fontStyle: "italic",
      fontWeight: "bold",
      color: "#000",
      textDecoration: "none",
      textAlign: "center",
    },
    composer: {
      text: "Simon Chikezie Amalagu",
      offsetX: 0,
      offsetY: 20,
      fontSize: 12,
      fontFamily: "Arial",
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#555",
      textDecoration: "none",
      textAlign: "center",
    },
  },
  measures: [
    {
      number: 1,
      measureNumberVisible: true,
      parts: [
        {
          partId: "1",
          partName: "Piano",
          instrument: {
            instrumentId: "Piano",
            instrumentName: "Acoustic Grand Piano",
          },
          notes: [
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: {
                step: "C",
                octave: 4,
              },
              type: "quarter",
              articulations: [
                {
                  type: "staccato",
                  placement: "above",
                  offsetX: 0,
                  offsetY: -5,
                },
              ],
              lyric: {
                text: "La",
                syllabic: "single",
                position: {
                  offsetX: 0,
                  offsetY: 15,
                },
                style: {
                  fontStyle: "normal",
                  fontWeight: "normal",
                  textDecoration: "none",
                  textAlign: "center",
                },
              },
            },
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: {
                step: "D",
                octave: 4,
              },
              type: "quarter",
            },
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: {
                step: "E",
                octave: 4,
              },
              type: "quarter",
              articulations: [
                {
                  type: "accent",
                  placement: "above",
                  offsetX: 0,
                  offsetY: -5,
                },
              ],
            },
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: {
                step: "F",
                octave: 4,
              },
              type: "quarter",
            },
          ],
        },
      ],
      timeSignature: {
        text: "4/4",
        offsetX: 10,
        offsetY: 10,
        fontSize: 12,
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: "bold",
        color: "#000",
        textDecoration: "none",
        textAlign: "center",
      },
      leftBarline: "single",
      rightBarline: "single",
    },
    {
      number: 2,
      measureNumberVisible: true,
      parts: [
        {
          partId: "1",
          partName: "Piano",
          instrument: {
            instrumentId: "Piano",
            instrumentName: "Acoustic Grand Piano",
          },
          notes: [
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: {
                step: "G",
                octave: 4,
              },
              type: "quarter",
              articulations: [
                {
                  type: "marcato",
                  placement: "above",
                  offsetX: 0,
                  offsetY: -5,
                },
              ],
              lyric: {
                text: "So",
                syllabic: "single",
                position: {
                  offsetX: 0,
                  offsetY: 15,
                },
                style: {
                  fontStyle: "normal",
                  fontWeight: "normal",
                  textDecoration: "none",
                  textAlign: "center",
                },
              },
            },
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: {
                step: "A",
                octave: 4,
              },
              type: "quarter",
            },
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: {
                step: "B",
                octave: 4,
              },
              type: "quarter",
            },
            {
              rest: false,
              duration: 1,
              voice: 1,
              pitch: {
                step: "C",
                octave: 5,
              },
              type: "quarter",
            },
          ],
        },
      ],
      leftBarline: "single",
      rightBarline: "end",
    },
  ],
};