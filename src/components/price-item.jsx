import * as React from "react"
import {
    priceItemContainer,
    subServiceContainer,
    serviceName,
    subServiceName,
    subServicePrice
} from "./price-item.module.css"
import { useTranslation } from "gatsby-plugin-react-i18next"

const PriceItem = ({name, subServices}) => {
    return (
        <div className={priceItemContainer}>
            <h3 className={serviceName}>{name}</h3>
            {
                subServices.map((subService) => (
                    <div className={subServiceContainer}>
                        <p className={subServiceName}>{subService.name}</p>
                        <p className={subServicePrice}>{subService.price}</p>
                    </div>
                    ))
            }
        </div>
    )
}

export default PriceItem