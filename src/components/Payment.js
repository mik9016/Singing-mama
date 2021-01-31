import { useRef, useState, useEffect  } from "react";
import env from 'react-dotenv';



export default function Payment(props) {
    const [paidFor, setPaidFor] = useState(false)
    const [loaded, setLoaded] = useState(false)

    let paypalRef = useRef();
    
    const product = {
        price: props.price,
        description: "Best lesson Ever",
        img: 'product IMG'
    };

    useEffect(() => {
        const script = document.createElement('script')
        script.src = `https://www.paypal.com/sdk/js?client-id=${env.REACT_PAYPAL_CLIENT_ID}`
        script.addEventListener('load', () => setLoaded(true));
        document.body.appendChild(script);

        if(loaded) {
            setTimeout(() => {
                window.paypal
                    .Buttons({
                        createOrder:(data,actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: product.description,
                                        amount: {
                                            currency_code: "USD",
                                            value: product.price
                                        }
                                    }
                                ]
                            });
                        },
                        onApprove: async (data,actions) => {
                            const order = await actions.order.capture();

                            setPaidFor(true);

                            console.log(order);
                        },
                        
                    })
                    .render(paypalRef);
            });
        }
    });

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:'center', marginTop:"15vh"}}>
            {paidFor ? (
                <div>
                <h1>Congrats, you just bought best lesson ever!</h1>
                </div>
            ): (
                <div>
                    <h1>
                        {product.description} for ${product.price}
                    </h1>
                    <div ref={v => {paypalRef = v}}/>
                </div>

            )}
        </div>
    )
}
