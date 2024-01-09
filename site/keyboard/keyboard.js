const Keyboard = {
  properties : {
    value : '',
    capslock: false
  },

  eventHandlers : {
    oninput : null,
    onclose : null
  },

  elements : {
    main : null,
    keyContainer : null,
    keys : []
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.keyContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard', 'keyboard--hidden');
    this.elements.keyContainer.classList.add('keyboard__keys');

    this.elements.keyContainer.appendChild(this._createKeys())
    this.elements.main.appendChild(this.elements.keyContainer);
    document.body.appendChild(this.elements.main);

    this.elements.keys = document.querySelectorAll('.keyboard__key');

    document.querySelectorAll('.use--keyboard-input').forEach(element => {
      element.addEventListener('focus', (e) => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
        // console.log(e.target)
        e.target.blur();
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      });
    })
  },

  //key 그리기, 이벤트 넣기, return fragment
  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
      'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
      'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter',
      'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
      'space'
    ];

    keyLayout.forEach(key => {
      const keyElement = document.createElement('button');
      keyElement.classList.add('keyboard__key');

      const createIconHTML = function(icon_name) {
        return `<i class="material-icons">${icon_name}</i>`;
      }

      const linebreak = ['backspace', 'p', 'enter', '?'].indexOf(key) !== -1;

      switch(key) {
        case 'backspace':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('backspace');

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvent('oninput');
          })
        break;

        case 'caps':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');

          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle('keyboard__key--active', this.properties.capslock);
            this._triggerEvent('oninput');
          });
        break;
        
        case 'enter':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('oninput');
          });
        break;
        
        case 'done':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
          keyElement.innerHTML = createIconHTML('check_circle');

          keyElement.addEventListener('click', () => {
            this.close();
            this._triggerEvent('onclose');
          });
        break;
        
        case 'space':
          keyElement.classList.add('keyboard__key--extra-wide');
          keyElement.innerHTML = createIconHTML('space_bar');
          
          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('oninput');
          });
        break;
        
        default :
          keyElement.textContent = key.toLocaleLowerCase();

          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capslock ? key.toUpperCase() : key.toLowerCase();
            this._triggerEvent('oninput');
          });
        break;
      }
      
      fragment.appendChild(keyElement);
      
      if(linebreak) {
        fragment.appendChild(document.createElement('br'))
      }
    })
    
    return fragment;
  },

  _triggerEvent(event_name) {
    if(typeof this.eventHandlers[event_name] === 'function'){
      this.eventHandlers[event_name](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capslock = !this.properties.capslock;
    for(const key of this.elements.keys) {
      if(key.childElementCount === 0) {
        key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },

  open(initialValue, oninput, onclose){
    this.properties.value = initialValue;
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove('keyboard--hidden');
  },
  
  close(){
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add('keyboard--hidden');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});



const lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
});