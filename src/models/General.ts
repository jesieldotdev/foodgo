export interface ProductView{
    id: number
    name: string
    merchant: string
    image: string
    rating: number
    saved: boolean
}

export interface PaymentMethodsProps{
    id: number
    label: string
    serial: string
}