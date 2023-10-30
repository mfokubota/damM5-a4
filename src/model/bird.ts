export class Bird {
    private name: string;
    private wingSpan: number;
    private eggSize: number; 

    public constructor(name: string, wingSpan: number, eggsSize: number) {
      this.name = name;
      this.wingSpan = wingSpan;
      this.eggSize = eggsSize;
    }
  
    public getName(): string {
      return this.name;
    }

    public getWingspan(): number {
      return this.wingSpan;
    }
    
    public getEggSize(): number {
      return this.eggSize;
    }
}