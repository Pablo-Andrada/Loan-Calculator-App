import React from 'react';
const Resultado = ({total,cantidad,plazo}) => {
    return (  
        <div className="resultado">
            <h2>Cotizacion:</h2>
            <p>La cantidad solicitada es: ${cantidad} </p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mensual es de: ${(total / plazo).toFixed(3)} </p>
            <p>Total a pagar: ${(total.toFixed(3))} </p>

        </div>
    )
}
 
export default Resultado
;