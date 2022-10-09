
export interface Direction{
    from: string;
    align: string;
}

export type Color = 'info' | 'success' | 'warning' | 'danger';

export interface NotifyI{
    direction: Direction,
    type: Color,
    message: string
}