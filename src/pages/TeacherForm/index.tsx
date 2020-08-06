import React from 'react'
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel voce"
                desc="Q top"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Zip Zop" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Input name="subject" label="Matéria" />
                    <Input name="cost" label="Curso da sua hora por aula" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;