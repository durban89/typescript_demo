function pluck<T, K extends keyof T>(o:T, names: K[]): T[K][] {
  return names.map(n => o[n])
}

interface interface1 {
  name: string;
  age: number;
}

let i: interface1 = {
  name: "A",
  age: 1,
}

let pluckStr: string[] = pluck(i, ['name'])
console.log(pluckStr)