export default function centerDiv(text: string): string {
  return `<div
            style="
                height:100%;
                width: 100%;
                display: grid;
                place-items: center;
                text-align: center;
            "
        >
            ${text}
        </div>`;
}
