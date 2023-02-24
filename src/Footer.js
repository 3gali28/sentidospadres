
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-content">
                <div><h2 className="titulo-footer">Sentidos</h2></div>
                <div className="footer-social">
                    <h4 >Nuestras Redes</h4>
                    <a className="footer-whatsapp" href="https://www.whatsapp.com" target="_blank"><img className="footer-whatsapp " src="whatsapp.png" alt="WhatsApp" /></a>
                    <a className="footer-instagram" href="https://www.instagram.com" target="_blank"><img className="footer-instagram" src="instagram.png" alt="Instagram" /></a>
                    <a className="footer-facebook" href="https://www.facebook.com/SentidosAsociacion/" target="_blank"><img className="footer-facebook" src="facebook.png" alt="Facebook" /></a>

                </div>
            </div> 
            <p className="copy">&copy; {year} <b>Sentidos</b></p>
        </footer>
    );
}

