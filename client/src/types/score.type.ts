
interface Part {
  "id": string,
  "measure": {
    "number": number,
    "width": number
  }
}
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
        "note": "quater" | "half" | "one" | "two" | "four",
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
  "pages": number,
  "appearance": {
    "page_layout": {
      "width": number,
      "height": number,
      "orientation": "portrait" | "landscape",
      "margins": {
        "odd_page_margin": {
          "top": number,
          "bottom": number,
          "left": number,
          "right": number
        },
        "even_page_margin": {
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
      "default_y": number,
      "font": string,
      "size": number,
      "color": string
    },
    "editor": {
      "text": "Editor Name",
      "default_x": number,
      "default_y": number,
      "font": string,
      "size": number,
      "color": string
    },
    "transcriber": {
      "text": "Transcriber Name",
      "default_x": number,
      "default_y": number,
      "font": string,
      "size": number,
      "color": string
    },
    "translator": {
      "text": "Translator Name",
      "default_x": number,
      "default_y": number,
      "font": string,
      "size": number,
      "color": string
    }
  },
  "part_list": [
    {
      "id": string,
      "start": true,
      "part_name": string ,
      "part_abbreviation": string,
      "instrument": {
        "instrument_name": string,
        "instrument_sound": string
      },
      "midi_device": {
        "id": string,
        "port": number
      },
      "midi_instrument": {
        "id": string,
        "program": number,
        "channel": number,
        "volume": number,
        "pan": number
      }
    }
  ],
  "parts": Part[]
}