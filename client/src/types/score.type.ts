

export interface Score {
  "meta": {
    "score": {
      "description": string,
      "created_at": string,
      "updated_at": string,
      "key": {
        "fifths": number,
        "mode": "major" | "minor",
        "key_signature": string
      },
      "tempo": {
        "note": "half" | "quater",
        "bpm": number,
        "time_signature": string
      }
    },
    "identification": {
      "author": string,
      "rights": string,
      "source": string,
      "encoding": string
    }
  },
  "appearance": {
    "page_layout": {
      "width": number,
      "height": number,
      "orientation": "portrait" | "landscape",
      "margins": {
        "odd": {
          "top": number,
          "bottom": number,
          "left": number,
          "right": number
        },
        "even": {
          "top": number,
          "bottom": number,
          "left": number,
          "right": number
        }
      }
    },
    "fonts": {
      "note_font": {
        "font": string,
        "size": number,
        "color": string
      },
      "lyric_font": {
        "font": string,
        "size": number,
        "color": string
      },
      "word-font": {
        "font": string,
        "size": number,
        "color": string
      }
    }
  },
  "credits": {
    "title": {
      "text": string,
      "default_x": number,
      "default_y": number,
      "font": string,
      "size": number,
      "color": string
    },
    "subtitle": {
      "text": string,
      "default_x": number,
      "default_y": number,
      "font": string,
      "size": number,
      "color": string
    },
    "composer": {
      "text": string,
      "default_x": number,
      "default_y": number,
      "font": string,
      "size": number,
      "color": string
    },
    "arranger": {
      "text": "Arranger Name",
      "default_x": number,
      "default_y": number,
      "font": string,
      "size": number,
      "color": string
    },
    "lyricist": {
      "text": "Lyricist Name",
      "default_x": number,
      "default_y": number,
      "font": string,
      "size": number,
      "color": string
    },
    "dedication": {
      "text": "Dedication",
      "default_x": number,
      "default_y": 630,
      "font": string,
      "size": 16,
      "color": string
    },
    "editor": {
      "text": "Editor Name",
      "default_x": number,
      "default_y": 660,
      "font": string,
      "size": 16,
      "color": string
    },
    "transcriber": {
      "text": "Transcriber Name",
      "default_x": number,
      "default_y": 690,
      "font": string,
      "size": 16,
      "color": string
    },
    "translator": {
      "text": "Translator Name",
      "default_x": number,
      "default_y": 690,
      "font": string,
      "size": 16,
      "color": string
    }
  },
  "part_list": [
    {
      "id": "P1",
      "start": true,
      "part_name": "Soprano" ,
      "part_abbreviation": "S.",
      "instrument": {
        "instrument_name": "Soprano",
        "instrument_sound": "soprano"
      },
      "midi_device": {
        "id": "MD1",
        "port": 2
      },
      "midi_instrument": {
        "id": "MI1",
        "program": 0,
        "channel": 0,
        "volume": 34,
        "pan": 0
      }
    }
  ],
  "parts": [
    {
      "id": "MI1",
      "measure": {
        "number": 1,
        "width": 434
      }
    }
  ]
}