import styles from './preguntasFrecuentes.module.css'

export default function PreguntasFrecuentes(){
    const preguntaFrecuenteFunction = (id: string) => {
        const preguntaText = document.getElementById(id)
        if(preguntaText){
            preguntaText.style.display = preguntaText.style.display === "block" ? 'none' : "block"
        }
    }

    return(
        <section className={styles.preguntasFrecuentesSection} id='preguntas-frecuentes'>
            <div className={styles.titleAndSubtitleContainer}>
                <h3 className={styles.title}>PREGUNTAS FRECUENTES</h3>
                <p className={styles.subTitle}>Resolvé tus consultas aca.</p>
            </div>

            <div className={styles.preguntasFrecuentesContainer}>
                <div className={styles.preguntaContainer}>
                    <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction("pregunta-anticipacion")}>
                        <span className={styles.preguntaTitle}>Con cuántas anticipación debo realizar el pedido?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                        </svg>
                    </div>
                    <span className={styles.preguntaText} id='pregunta-anticipacion'>Con 24 horas de anticipación, en el día según disponibilidad. En fechas festivas se recomienda hacerlo con más anticipación.</span>
                </div>

                <div className={styles.preguntaContainer}>
                    <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction("pregunta-envios")}>
                        <span className={styles.preguntaTitle}>Realizan envios?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                        </svg>
                    </div>
                    <span className={styles.preguntaText} id='pregunta-envios'>Si, hacemos envío a domicilio, consultar costos.</span>
                </div>

                <div className={styles.preguntaContainer}>
                    <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction("pregunta-horarios")}>
                        <span className={styles.preguntaTitle}>Tienen una franja horaria para los envíos?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                        </svg>
                    </div>
                    <span className={styles.preguntaText} id='pregunta-horarios'>No, ya que se coordina con el cliente según su necesidad, pero también dependerá de nuestra disponibilidad. Siempre se hará lo posible por realizar la entrega en el horario que indique el cliente.</span>
                </div>

                <div className={styles.preguntaContainer}>
                    <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction("pregunta-retiros")}>
                        <span className={styles.preguntaTitle}>Tienen punto de retiro?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                        </svg>
                    </div>
                    <span className={styles.preguntaText} id='pregunta-retiros'>Si, contamos con dos puntos de retiro: Villa Maipú (San Martin) y Villa Urquiza (CABA).</span>
                </div>

                <div className={styles.preguntaContainer}>
                    <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction("pregunta-medios-de-pago")}>
                        <span className={styles.preguntaTitle}>Cuáles son los medios de pago disponibles?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                        </svg>
                    </div>
                    <span className={styles.preguntaText} id='pregunta-medios-de-pago'>
                        <ul className={styles.list}>
                            <li>En efectivo, retirando personalmente.</li>
                            <li>Transferencia bancaria.</li>
                            <li>Tarjeta de débito/crédito con link de pago o escaneando el código QR.</li>
                        </ul>
                    </span>
                </div>

                <div className={styles.preguntaContainer}>
                    <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction("pregunta-reserva")}>
                        <span className={styles.preguntaTitle}>Cómo reservo mi pedido?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                        </svg>
                    </div>
                    <span className={styles.preguntaText} id='pregunta-reserva'>Abonando una seña del 50%.</span>
                </div>

                <div className={styles.preguntaContainer}>
                    <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction("pregunta-seña")}>
                        <span className={styles.preguntaTitle}>Que pasa con la seña si cancelo el pedido?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                        </svg>
                    </div>
                    <span className={styles.preguntaText} id='pregunta-seña'>El dinero es devuelto siempre y cuando se avise con anticipación. Llegado el día de entrega y ya hecha la picada la seña no será devuelta.</span>
                </div>

                <div className={styles.preguntaContainer}>
                    <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction("pregunta-envasada")}>
                        <span className={styles.preguntaTitle}>Las picaditas vienen envasadas al vacío?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                        </svg>
                    </div>
                    <span className={styles.preguntaText} id='pregunta-envasada'>No, ya que se elaboran el mismo día de entrega para que disfruten de una picadita con productos frescos.</span>
                </div>

                <div className={styles.preguntaContainer}>
                    <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction("pregunta-modificacion")}>
                        <span className={styles.preguntaTitle}>Las picaditas pueden modificarse?</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                        </svg>
                    </div>
                    <span className={styles.preguntaText} id='pregunta-modificacion'>No, pero podés armar una a tu gusto. La cantidad de productos a elección dependerá del tamaño de picadita que necesites.</span>
                </div>
            </div>
        </section>
    )
}