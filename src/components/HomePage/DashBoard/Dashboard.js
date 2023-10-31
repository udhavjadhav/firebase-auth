import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './Dashboard.module.css'
import LeftBar from '../LeftBar/LeftBar'
import RightBar from '../RightBar/RightBar'
import MainContent from '../MainContent/MainContent'

const Dashboard = (props) => {
  return (
    <div className={styles.container}>
      <div className='content'><LeftBar name={props.name}/></div>
      <div className='content'><MainContent/></div>
      <div className='right-bar'><RightBar/></div>
    </div>
  )
}

export default Dashboard