
interface Part {
  "id": string,
  "measure": {
    "number": number,
    "width": number
  }
}

interface ScoreText {
  "text": string,
  "default_x": number,
  "default_y": number,
  "font": string,
  "size": number,
  "color": string
  "text_align": string,
  "font_weight": string,
  "decoration": string,
  "font_style": string,
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
    "title": ScoreText,
    "subtitle": ScoreText,
    "composer": ScoreText,
    "arranger": ScoreText,
    "lyricist": ScoreText,
    "dedication": ScoreText,
    "editor": ScoreText,
    "transcriber": ScoreText,
    "translator": ScoreText
  },
  "score_texts": ScoreText[],

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