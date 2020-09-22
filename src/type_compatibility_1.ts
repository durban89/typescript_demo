// let items = [1,2,3];
// items.forEach((item, index, array) => {
//     console.log(item);
// })

// items.forEach((item) => {
//     console.log(item);
// })


// let m1 = () => ({name: "Alice"});
// let m2 = () => ({name: "Alice", location: "Seattle"});
// m1 = m2
// m2 = m1 // Error

// enum EventType {
//     Mouse,
//     Keyboard,
// };

// interface Event {
//     timestamp: number;
// }

// interface MouseEvent extends Event {
//     eventX: number;
//     eventY: number;
// }

// interface KeyEvent extends Event {
//     keyCode: number;
// }

// function listenEvent(eventType: EventType, handler: (n:Event) => void) {
//     // other
// }

// listenEvent(EventType.Mouse, (e: MouseEvent)=>console.log(e.eventX+', '+e.eventY));

// // 报类型异常
// listenEvent(EventType.Mouse, (e: Event) => console.log(<MouseEvent>e.eventX + ', ' + <MouseEvent>e.eventY));

// listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.eventX + ', ' + e.eventY)))

// // 报类型异常
// listenEvent(EventType.Mouse, (e: number) => console.log(e))

function invokeLater(args: any[], callback: (...args: any[]) => void) {
    // other
}

invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));