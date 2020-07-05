

export enum ImageAnimation {
  LEFT_TO_RIGHT,
  RIGHT_TO_LEFT
}


export function makeDocument(data: {
  destDocument: Document;
  innerHtml: any;
  head: any;
}) {
  const {destDocument, innerHtml, head} = data;
  const doc = document.implementation.createHTMLDocument('New Document');

  // Copy the new HTML document into the frame
  const srcNode = doc.documentElement;
  const newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);

  try {
    destDocument.head.appendChild(head);
    destDocument.body.appendChild(innerHtml);
  } catch (e) {
    console.log(e);
  }

}
