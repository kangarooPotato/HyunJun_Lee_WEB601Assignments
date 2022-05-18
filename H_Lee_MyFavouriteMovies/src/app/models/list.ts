import {Content} from "./content";

export class List {

  private _items: Content[];
  constructor(item: Content) {
    this._items = []; // initialize Content array to be empty
  }

  get items():Content[] {
    return this._items;
  }

  addContent(Content: any) {
    this._items.push(Content);
  }

  contentLength(){
    return this._items.length;
  }

  readContent(item: number){
    if(item <= this.contentLength()){
        return `<h3 style="color: coral">title</h3>
                <p>something</p>
                <a>image</a>`;
    } else {
      return "<h3>error</h3>";
    }
  }

}
