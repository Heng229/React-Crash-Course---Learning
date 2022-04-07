import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, test2}) => {
  const onClick = (e) => {
        console.log('clicked')
  }

  return (
    <header>
        <h1 style={headingStyle} >this is title : {title}, this is test2 : {test2} </h1>
        <Button color='green' text='Test1' onClick={onClick} />
        <Button color='blue' text='Test2' onClick={onClick} />
        <Button color='red' text='Test3' onClick={onClick} />
    </header>
  )
}

// Set a prop without adding parameter at App.js
Header.defaultProps = {
    title: 'Task Tracker',
    test2: 'Test 2 value',
}

//Give a datatype to a props, making system more robust. When error still can render but error will show in console.
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//create variable for style instead of inline js style.
const headingStyle = {
    color : 'cyan', 
    backgroundColor: 'black'
}

export default Header