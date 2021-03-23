export interface TextPictureCard {
    title: string;
    text: string;
    imgURL: URL;
}

export interface ForAssistenterContent {
    title: string;
    ingress: string;
    //cards: Array<TextPictureCard>;
    bottomText: string;
  }

  export default (): ForAssistenterContent => {
      return {
        title: "Assistenter",
        ingress:
        "Vektorassistent er et frivillig verv der du reiser til en ungdomsskole én dag i uka for å hjelpe til som lærerassistent i matematikk. En stilling som vektorassistent varer i 4 eller 8 uker, og du kan selv velge hvilken ukedag som passer best for deg.",
        
          bottomText:
            "Har du noen spørsmål? Sjekk ut ofte stilte spørsmål og svar.",
        };
      };
  