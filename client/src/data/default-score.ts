import type { Score } from "@/types/score.type";

export const defaultScore : Partial<Score> = {
  "meta": {
    "score": {
      "description": "",
      "created_at": "",
      "updated_at": "",
      "key": {
        "fifths": 0,
        "mode": "major",
        "key_signature": "C maj"
      },
      "tempo": {
        "note": "quater",
        "bpm": 80,
        "time_signature": "4/4"
      }
    },
    "identification": {
      "author": "",
      "rights": "",
      "source": "",
      "encoding": ""
    }
  },
  "pages": 1,
  "appearance": {
    "page_layout": {
      "width": 595,
      "height": 842,
      "orientation": "portrait",
      "margins": {
        "odd_page_margin": {
          "top": 20,
          "bottom": 20,
          "left": 20,
          "right": 20
        },
        "even_page_margin": {
          "top": 20,
          "bottom": 20,
          "left": 20,
          "right": 20
        }
      }
    },
    "fonts": {
      "note_font": {
        "font": "monospace",
        "size": 12,
        "color": "#000000"
      },
      "lyric_font": {
        "font": "system-ui",
        "size": 12,
        "color": "#000000"
      },
      "word-font": {
        "font": "system-ui",
        "size": 12,
        "color": "#000000"
      }
    }
  },
  "credits": {
    "title": {
      "text": "Bethlehem Down",
      "default_x": 0,
      "default_y": 30,
      "font": "Arial",
      "size": 24,
      "color": "#000000",
      "text_align": "center",
      "font_weight": "bold",
      "decoration": 'none',
      "font_style": 'none',
    },
    "subtitle": {
      "text": "Subtitle",
      "default_x": 0,
      "default_y": 35,
      "font": "Arial",
      "size": 18,
      "color": "#000000",
      "text_align": "center",
      "font_weight": 'normal',
      "decoration": 'none',
      "font_style": 'none',
    },
    "composer": {
      "text": "Composer",
      "default_x": 575,
      "default_y": 50,
      "font": "Arial",
      "size": 16,
      "color": "#000000",
      "text_align": "left",
      "font_weight": 'normal',
      "decoration": 'none',
      "font_style": 'none',
    },
    "arranger": {
      "text": "Arranger Name",
      "default_x": 575,
      "default_y": 55,
      "font": "Arial",
      "size": 16,
      "color": "#000000",
      "text_align": "left",
      "font_weight": 'normal',
      "decoration": 'none',
      "font_style": 'none',
    },
    "lyricist": {
      "text": "Lyricist Name",
      "default_x": 20,
      "default_y": 50,
      "font": "Arial",
      "size": 16,
      "color": "#000000",
      "text_align": "left",
      "font_weight": 'normal',
      "decoration": 'none',
      "font_style": 'none',
    },
    "dedication": {
      "text": "Dedication",
      "default_x": 297.5,
      "default_y": 15,
      "font": "Arial",
      "size": 16,
      "color": "#000000",
      "text_align": "center",
      "font_weight": 'normal',
      "decoration": 'none',
      "font_style": 'none',
    },
    "editor": {
      "text": "Editor Name",
      "default_x": 545,
      "default_y": 660,
      "font": "Arial",
      "size": 16,
      "color": "#000000",
      "text_align": "left",
      "font_weight": 'normal',
      "decoration": 'none',
      "font_style": 'none',
    },
    "transcriber": {
      "text": "Transcriber Name",
      "default_x": 545,
      "default_y": 690,
      "font": "Arial",
      "size": 16,
      "color": "#000000",
      "text_align": "left",
      "font_weight": 'normal',
      "decoration": 'none',
      "font_style": 'none',
    },
    "translator": {
      "text": "Translator Name",
      "default_x": 545,
      "default_y": 690,
      "font": "Arial",
      "size": 16,
      "color": "#000000",
      "text_align": "left",
      "font_weight": 'normal',
      "decoration": 'none',
      "font_style": 'none',
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