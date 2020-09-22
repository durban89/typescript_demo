enum Derection {
    Up,
    Down,
    Left,
    Right
}

enum ResponseOther {
    No = 0,
    Yes = 1,
}

function respond(re: string, me: ResponseOther) {

}

respond("message", ResponseOther.No)