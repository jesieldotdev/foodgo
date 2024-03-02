import { PaymentMethodsProps } from "@/models/General";

export const PaymentMethods = [
  {
    label: "Credit card",
    serial: "5105 **** **** 0505",
    brand: 'VISA'
  },
  {
    label: "Debit card",
    serial: "5105 **** **** 0505",
    brand: 'MASTER_CARD'
  },
].map((item, index) => ({
  id: index,
  ...item,
})) as PaymentMethodsProps[]

