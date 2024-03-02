import React from "react"
import { PaymentMethods } from "./viewModel"

interface PaymentMethodsViewControllerProps {

}

export const usePaymentMethodsViewController = () => {
    const [selectedPayment, setSelectedPayment] = React.useState<number>(0)

    function handleCardClick(methodId: number) {
        setSelectedPayment(methodId)
    }
    return {
        selectedPayment,
        PaymentMethods,
        handleCardClick
    }
}