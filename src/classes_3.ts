class Animal {
    public constructor(private name: string) { }

    public move(distanceMeter: number = 0) {
        console.log(`${this.name} moved ${distanceMeter}m`);
    }
}
