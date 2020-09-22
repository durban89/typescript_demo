interface UIElement {
    addClickListener(onclick: (this: void, e: Error) => void): void;
}

class Handler {
    info: string;
    onClickGood = (e: Error) => { this.info = e.message }
}

// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Error) {
//         this.info = e.message;
//     }
//     onClickGood(this: void, e: Error) {
//         console.log('点击了！');
//     }
// }

let h = new Handler();
let uiElement: UIElement = {
    addClickListener(onclick: (this: void, e: Error) => void) {
        // do something
    }
};

uiElement.addClickListener(h.onClickGood);