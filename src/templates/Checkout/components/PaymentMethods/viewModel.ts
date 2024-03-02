import { PaymentMethodsProps } from "@/models/General";

export const PaymentMethods: PaymentMethodsProps[] = [
  {
    label: "Credit card",
    serial: "5105 **** **** 0505",
  },
  {
    label: "Debit card",
    serial: "5105 **** **** 0505",
  },
].map((item, index) => ({
  id: index,
  ...item,
}));

