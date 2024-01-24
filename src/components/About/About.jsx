import './About.css'

const AboutMe = (info) => {
    console.log(info);
     return (
        <div className='info-container'>
            <div className='image-container'>
                <img src="https://pbs.twimg.com/media/DTDFZ6vV4AAAvJ_.jpg" alt="Esta imagen representa a Andy Ostos" />
            </div>
            <div className='info-card'>
            <h2>
                Nombre: <p>Andy Ostos ☆*:.｡.o(≧▽≦)o.｡.:*☆</p>
            </h2>
            <h2>
                Género: <p>Femenino ヽ(*⌒▽⌒*)ﾉ</p>
            </h2>
            <h2>
                Edad: <p>eso no se pregunta pero 26 años ( ╥ω╥ )</p>
            </h2>
            <h2>
                Profesión: <p>Princesa de tiempo completo ヽ(o＾▽＾o)ノ</p>
            </h2>

            <h2>
                Descripción: <p>Soy ilustradora y programadora, me gusta mucho ver anime y aprender nuevas herramientas 
                    de programación, hago ilustraciones tipo comic, algun dia me gustaria publicar uno. Mi objetivo ahorita
                    es conseguir un trabajo de desarrolladora web, de preferencia frontend, me gusta mucho manipular el DOM, CSS y React.
                    En mis tiempos libres lucho contra el mal en nombre del amor y la justicia 	(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧.
                </p>
            </h2>

            <h2>
                Contacto: <p>andres.ostos.art@gmal.com</p>
            </h2>
            </div>

           
        </div>
     )
 }

export default AboutMe;