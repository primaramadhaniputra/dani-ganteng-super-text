# REACT SUPERTEXT

REACT SUPERTEXT is a paragraph powered by some func like truncate,currency (and we will add more next okay....)

## Screenshots

![App Screenshot](https://github.com/primaramadhaniputra/image/blob/main/imagePoweredText.png)

## Usage/Examples

```javascript
import {Text} from "react-powered-text";

const App = () => (
  <div>
    <Text
      currency={{
        locales: "id-ID",
        options: {
          style: "currency",
          currency: "IDR",
        },
      }}
      style={{fontSize: "50px"}}
    >
      1000000
    </Text>
    <div style={{display: "flex", gap: "20px"}}>
      <Text
        truncate={{
          from: 0,
          to: 16,
        }}
        style={{fontSize: "50px"}}
      >
        NO MY TEXT TRUNCATE
      </Text>
      <Text style={{fontSize: "50px"}}>(GUESS WHAT ?)</Text>
    </div>

    <Text
      style={{fontSize: "50px"}}
      highlight={{
        highlightText: ["DANI ADALAH", "GANTENG"],
        highlightStyle: {
          color: "white",
          fontWeight: "bold",
          background: "blue",
          fontSize: "30px",
          textDecoration: "underline overline",
        },
      }}
    >
      highlight DANI ADALAH MANUSIA GANTENG
    </Text>
    <Text style={{fontSize: "50px"}}>DOING NOTHING</Text>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);


```

## Props

#### Props that you can pass to Text currency

| Prop Name | Value                                                                                    | required |
| :-------- | :--------------------------------------------------------------------------------------- | :------- |
| currency  | {locales?: string / string[] / undefined,options?: Intl.NumberFormatOptions / undefined} | false    |

#### Props that you can pass to Text truncate

| Prop Name | Value                        | required |
| :-------- | :--------------------------- | :------- |
| currency  | { from: number, to: number } | false    |

#### Props that you can pass to Text highlight

| Prop Name | Value                                                            | required |
| :-------- | :--------------------------------------------------------------- | :------- |
| highlight | { highlightText: string[], highlightStyle: React.CSSProperties } | false    |
