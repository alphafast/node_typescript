export interface ClockInterface {
    tick(): any;
}

export interface ClockConstructure{
    new (hours: number, minute: number): ClockInterface;
}