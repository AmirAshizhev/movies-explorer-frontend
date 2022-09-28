import './AboutProject.css';

const AboutProject = () => {
  return (
    <div className='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__paragraphs'>
        <p>Дипломный проект включал 5 этапов</p>
        <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p>На выполнение диплома ушло 5 недель</p>
        <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>  
      </div>
      <div className='aboutProject__weeks'>
        <p className='aboutProject__week'>1 неделя</p>
        <p className='aboutProject__week aboutProject__week_gray'>4 недели</p>
        <p className='aboutProject__week-task'>Back-end</p>
        <p className='aboutProject__week-task'>Front-end</p>
      </div>
    </div>
  )
}

export default AboutProject;