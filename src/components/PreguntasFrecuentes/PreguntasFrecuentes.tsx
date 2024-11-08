import styles from './preguntasFrecuentes.module.css'
import PreguntaFrecuente from './PreguntaFrecuente/PreguntaFrecuente'

export default function PreguntasFrecuentes(){
    return(
        <section className={styles.preguntasFrecuentesSection} id='preguntas-frecuentes'>
            <div className={styles.titleAndSubtitleContainer}>
                <h3 className={styles.title}>PREGUNTAS FRECUENTES</h3>
                <p className={styles.subTitle}>Resolvé tus consultas aca.</p>
            </div>

            <div className={styles.preguntasFrecuentesContainer}>
                <PreguntaFrecuente title='Con cuántas anticipación debo realizar el pedido?' description='Con 24 horas de anticipación, en el día según disponibilidad. En fechas festivas se recomienda hacerlo con más anticipación.' id='pregunta-envios'/>

                <PreguntaFrecuente title='Realizan envios?' description='Si, hacemos envío a domicilio, consultar costos.' id='pregunta-anticipacion'/>

                <PreguntaFrecuente title='Tienen una franja horaria para los envíos?' description='No, ya que se coordina con el cliente según su necesidad, pero también dependerá de nuestra disponibilidad. Siempre se hará lo posible por realizar la entrega en el horario que indique el cliente.' id='pregunta-horarios'/>

                <PreguntaFrecuente title='Tienen punto de retiro?' description='Si, contamos con dos puntos de retiro: Villa Maipú (San Martin) y Villa Urquiza (CABA).' id='pregunta-retiros'/>

                <PreguntaFrecuente title='Cuáles son los medios de pago disponibles?' description='En efectivo (retirando personalmente), transferencia bancaria, tarjeta de débito/crédito con link de pago o escaneando el código QR.' id='pregunta-medios-de-pago'/>

                <PreguntaFrecuente title='Cómo reservo mi pedido?' description='Abonando una seña del 50%.' id='pregunta-reserva'/>

                <PreguntaFrecuente title='Que pasa con la seña si cancelo el pedido?' description='El dinero es devuelto siempre y cuando se avise con anticipación. Llegado el día de entrega y ya hecha la picada la seña no será devuelta.' id='pregunta-seña'/>

                <PreguntaFrecuente title='Las picaditas vienen envasadas al vacío?' description='No, ya que se elaboran el mismo día de entrega para que disfruten de una picadita con productos frescos.' id='pregunta-envasada'/>

                <PreguntaFrecuente title='Las picaditas pueden modificarse?' description='No, pero podés armar una a tu gusto. La cantidad de productos a elección dependerá del tamaño de picadita que necesites.' id='pregunta-modificacion'/>
            </div>
        </section>
    )
}