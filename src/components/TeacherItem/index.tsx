import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fmii3-1.fna.fbcdn.net/v/t1.0-9/103504915_3131825963561105_6879597299268682295_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=l_56wEMtJz8AX94UXP5&_nc_ht=scontent.fmii3-1.fna&oh=dffdefca2cdb85fdafbbe9ab3126eb8d&oe=5F4D01B9" alt="rafa" />
                <div>
                    <strong>Rafaelle Kamegawa</strong>
                    <span>Enfermagem</span>
                </div>
            </header>
            <p>
                ela e mto minha namorada ti amu
                    </p>
            <footer>
                <p>Preço/hora:
                            <strong> 2 pitizas</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />Entrar em contato
                            </button>

            </footer>
        </article>
    )
}

export default TeacherItem;