import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  private isHighlighted: boolean = false;

  //이건 왜 또 컨스트럭터 씀?
  private initialColourOfTagText: string;

  //이건 뭐임? color 지정해주려고 하는데 미리 정의해두는건가?
  @Input() colour: string = '';

  // 호스트바인딩이 뭐임? 걍 리스너랑 같은 종류인데 무슨 데이터를 넣는건가?
  // 스타일을 변경하는거랑 뭐가 다름? 값 넣기 vs 스타일 추가 느낌?
  @HostBinding('style.backgroundColor') get textColour() {
    return this.isHighlighted ? this.colour : 'transparent';
  }

  //이건 왜 컨스트럭터 씀?
  constructor(private elm: ElementRef) {
    this.initialColourOfTagText = this.elm.nativeElement.style.color;
  }


  // 이벤트리스너 같은 거 같음.. 마우스를 올리면 = mouseover, 스타일을 지정하고
  @HostListener("mouseover") onMouseOver() {
    this.elm.nativeElement.style.border = "4px solid pink"
    // set type background color
    this.elm.nativeElement.style.border = "4px solid red";
    // set tag font color
    this.elm.nativeElement.style.color = 'darkred';
  }

  // 마우스 내리면 none으로!
  @HostListener("mouseout") onMouseOut() {
    this.elm.nativeElement.style.border = "none"
    
    //만약 색을 원래대로 되돌리고싶으면 어떻게 함?
    // this.elm.nativeElement.style.color = "none"
  }

  // click on title 타이틀 클릭시 변경, 기본값이 false로 되어있어서 누르면 true가 댐
  @HostListener("click") onClick() {
    this.isHighlighted = !this.isHighlighted;
  }


}
