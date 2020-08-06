import React from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem/'



import './styles.css'
import Input from '../../components/Input'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses sao os professores">
                <form id="search-teachers">
                    
                    <Input name="subject" label="Matéria"/>
                    <Input name="week-day" label="Dia da semana"/>
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;