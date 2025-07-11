import React, { useState } from 'react'

export const Calculadora = () => {
    const [numero, setNumero] = useState([])
    const [numeroActual, setNumeroActual] = useState('');
    const [data, setData] = useState("")

    const num = (num) => {
        setNumeroActual(numeroActual + num)
    }

    const iguals = () => {
        if (numeroActual !== '') {
            setNumero([...numero, Number(numeroActual)]);
            setNumeroActual('');
            setData("+")
        }
    }

    const igualr = () => {
        if (numeroActual !== '') {
            setNumero([...numero, Number(numeroActual)]);
            setNumeroActual('');
            setData("-")
        }
    }

    const iguald = () => {
        if (numeroActual !== '') {
            setNumero([...numero, Number(numeroActual)]);
            setNumeroActual('');
            setData("%")
        }
    }

    const igualm = () => {
        if (numeroActual !== '') {
            setNumero([...numero, Number(numeroActual)]);
            setNumeroActual('');
            setData("*")
        }
    }

    const calcular = (op) => {
        const n1 = numero[0]
        const n2 = Number(numeroActual)
        let r
        switch (op) {
            case "+":
                r = n1 + n2
                break;
            case "-":
                r = n1 - n2
                break
            case "%":
                r = n1 / n2
                break
            case "*":
                r = n1 * n2
                break
            default:
                break;
        }
        setNumeroActual(r)
    }

    return (
        <>
            <div className="calculadora">
                <input type="text" value={numeroActual} readOnly />

                <div className="botones">
                    <button onClick={() => num(7)}>7</button>
                    <button onClick={() => num(8)}>8</button>
                    <button onClick={() => num(9)}>9</button>
                    <button onClick={igualm}>*</button>

                    <button onClick={() => num(4)}>4</button>
                    <button onClick={() => num(5)}>5</button>
                    <button onClick={() => num(6)}>6</button>
                    <button onClick={iguald}>%</button>

                    <button onClick={() => num(1)}>1</button>
                    <button onClick={() => num(2)}>2</button>
                    <button onClick={() => num(3)}>3</button>
                    <button onClick={igualr}>-</button>

                    <button onClick={() => num(0)}>0</button>
                    <button onClick={iguals}>+</button>
                    <button onClick={() => calcular(data)}>=</button>
                </div>
            </div>
        </>
    )
}
