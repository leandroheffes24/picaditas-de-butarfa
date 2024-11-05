import styles from './slider.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Slider(){
    return(
        <section className={styles.sliderSection}>
            <Splide
                options={{
                    type: "loop",
                    perPage: 1,
                    perMove: 1,
                    arrows: false,
                    autoplay: true,
                    interval: 4000
                }}
                className={styles.splide}
            >
                <SplideSlide className={styles.slider}>
                    <div className={styles.sliderIconContainer}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.sliderIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                            <path d="M3 10l18 0" />
                            <path d="M7 15l.01 0" />
                            <path d="M11 15l2 0" />
                        </svg>
                    </div>
                    <span className={styles.sliderTitle}>PAGOS</span>
                    <span className={styles.sliderText}>Efectivo, transferencia bancaria y tarjetas de débito/crédito con link de pago o escaneando código QR.</span>
                </SplideSlide>

                <SplideSlide className={styles.slider}>
                    <div className={styles.sliderIconContainer}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.sliderIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
                            <path d="M13 6h2l1.5 3l2 4" />
                        </svg>
                    </div>
                    <span className={styles.sliderTitle}>ENVIOS</span>
                    <span className={styles.sliderText}>Realiza tu pedido con 24hs de  anticipación y coordinamos la entrega.</span>
                </SplideSlide>

                <SplideSlide className={styles.slider}>
                    <div className={styles.sliderIconContainer}>
                        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.sliderIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                        </svg>
                    </div>
                    <span className={styles.sliderTitle}>PUNTOS DE RETIRO</span>
                    <span className={styles.sliderText}>Previa coordinación por Villa Urquiza o San Martin.</span>
                </SplideSlide>

                <SplideSlide className={styles.slider}>
                    <div className={styles.sliderIconContainer}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.sliderIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                        </svg>
                    </div>
                    <span className={styles.sliderTitle}>CONSULTAS</span>
                    <span className={styles.sliderText}>Realiza todas tus consultas por Whatsapp.</span>
                </SplideSlide>
            </Splide>

            <div className={styles.splideDesktopContainer}>
                <div className={styles.splideContainer}>
                    <div className={styles.sliderIconContainer}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.sliderIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                            <path d="M3 10l18 0" />
                            <path d="M7 15l.01 0" />
                            <path d="M11 15l2 0" />
                        </svg>
                    </div>
                    <span className={styles.sliderTitle}>PAGOS</span>
                    <span className={styles.sliderText}>Efectivo, transferencia bancaria y tarjetas de débito/crédito con link de pago o escaneando código QR.</span>
                </div>

                <div className={styles.separator}></div>

                <div className={styles.splideContainer}>
                    <div className={styles.sliderIconContainer}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.sliderIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
                            <path d="M13 6h2l1.5 3l2 4" />
                        </svg>
                    </div>
                    <span className={styles.sliderTitle}>ENVIOS</span>
                    <span className={styles.sliderText}>Realiza tu pedido con 24hs de  anticipación y coordinamos la entrega.</span>
                </div>

                <div className={styles.separator}></div>

                <div className={styles.splideContainer}>
                    <div className={styles.sliderIconContainer}>
                        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.sliderIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                        </svg>
                    </div>
                    <span className={styles.sliderTitle}>PUNTOS DE RETIRO</span>
                    <span className={styles.sliderText}>Previa coordinación por Villa Urquiza o San Martin.</span>
                </div>

                <div className={styles.separator}></div>

                <div className={styles.splideContainer}>
                    <div className={styles.sliderIconContainer}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.sliderIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                        </svg>
                    </div>
                    <span className={styles.sliderTitle}>CONSULTAS</span>
                    <span className={styles.sliderText}>Realiza todas tus consultas por Whatsapp.</span>
                </div>
            </div>
        </section>
    )
}