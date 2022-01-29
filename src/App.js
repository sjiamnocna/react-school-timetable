import Row from './components/row/row.comp'

const Timetable = ({lessons, ...props}) => {
  return(
    <div className='timetable-container'>
      <Row lessons={lessons} title='Po' note='31.2' beginTime={700} />
    </div>
  )
}

export default Timetable