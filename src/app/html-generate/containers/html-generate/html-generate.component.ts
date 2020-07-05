import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageAnimation, makeDocument} from '../../models/html-generate.model';

@Component({
  selector: 'html-generate',
  templateUrl: './html-generate.component.html',
  styleUrls: ['./html-generate.component.scss']
})
export class HtmlGenerateComponent implements OnInit {

  @ViewChild('frameElem') frameElem: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(e) {
    const {file, clickUrl, animation} = e;
    const objectURL = URL.createObjectURL(file);

    makeDocument({
      destDocument: this.frameElem.nativeElement.contentDocument,
      innerHtml: this.getContainerElement({
        src: objectURL,
        clickUrl
      }),
      head: this.getStyles({
        animation
      }),
    });
  }

  getContainerElement(data) {
    const {src, clickUrl} = data;
    const container = document.createElement('div');
    container.classList.add('container');

    const img = document.createElement('img');
    img.classList.add('click-img', 'slide');
    img.src = src;

    const a = document.createElement('a');
    a.href = clickUrl;
    a.target = '_blank';
    a.appendChild(img);

    container.appendChild(a);
    container.appendChild(this.getScaleElement(img))

    return container;
  }

  getStyles(data: {animation: ImageAnimation}) {
    const {animation} = data;
    let animStyle = '';

    switch (animation) {
      case ImageAnimation.LEFT_TO_RIGHT: {
        animStyle = 'move_right';
        break;
      }
      case ImageAnimation.RIGHT_TO_LEFT: {
        animStyle = 'move_left';
        break;
      }
    }

    const style = document.createElement('style') as HTMLStyleElement;

    style.innerHTML = `
    .container {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    .scale-container {
      display: flex;
      flex-direction: column;
    
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
    
    .scale-container button { 
      
   }
    
    a {
      position: relative;
    }
    
    .click-img {
            height: 100%;
            transition: .1s;
        }
     .slide {
       animation: 4s linear 0s infinite ${animStyle};
      }
      
      @keyframes move_left { 
        from { 
          margin-left: 100%; 
          } 
        to { 
          margin-left: -100%;
        }  
      }
      
      @keyframes move_right { 
        from { 
          margin-left: -100%; 
          } 
        to { 
          margin-left: 100%;
        }  
      }
    
    `;
    return style;
  }

  getScaleElement(img) {
    img.dataset.scale = 1;
    const scaleNum = 0.1;

    const scaleContainer = document.createElement('div');
    scaleContainer.classList.add('scale-container');
    const up = document.createElement('button');
    up.id = 'up';
    up.innerText = '+';
    up.addEventListener('click', () => {
      img.dataset.scale = (+img.dataset.scale + scaleNum).toString();
      img.style.transform = `scale(${img.dataset.scale})`;
    });

    const down = document.createElement('button');
    down.id = 'down';
    down.innerText = '-';
    down.onclick = () => {
      img.dataset.scale = (+img.dataset.scale - scaleNum).toString();
      img.style.transform = `scale(${img.dataset.scale})`;
    };

    scaleContainer.appendChild(up);
    scaleContainer.appendChild(down);

    return scaleContainer;
  }
}
