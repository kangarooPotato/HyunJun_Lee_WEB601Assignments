import {Content} from "./content";

export class List {
  private _items: Content[]; // 이거 왜 private함?
  // 안쓰거나 protected써야 다른곳에서도 쓸수있는거 아님?

  constructor() {
    this._items = []; // initialize Content array to be empty
  }

  get items():Content[] {
    return this._items;
  }

  //addContent(Content: any)

  addContent(oneitem: Content): void {
    this._items.push(oneitem);
  }

  getLength(): number {
    return this._items.length;
  }

  processContent (content: Content):void {
    console.log(content.body);
  }

  printProperties(index: number): string {
    if (this._items.length <= index || index < 0) {
      return `<h2>Error, invalid index requested: ${index}</h2>`;
    }
    return `<div class="content-wrapper" style="text-align: center; width: 500px; margin: 0 auto;">
              <h1>${this._items[index].title}</h1>
              <p>${this._items[index].body}</p>
              <h6 style="color: dodgerblue;">${this._items[index].author}</h6>
              <img src="${this._items[index].imageLink}">
              <div style="font-weight: bold;">${this._items[index].type}</div>
            </div>`;
  }
}
