import { type CSSProperties } from 'vue';

export interface TextStyle extends CSSProperties {
  color: string,
  textAlign: CSSProperties['textAlign'],
  fontWeight: string,
  fontSize: string,
  fontFamily: string,
  fontStyle: string
  textDecoration: string,
}