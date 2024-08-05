import React from 'react'
import { connect } from 'react-redux'
import styles from '@/styles/dashboard.module.css'
import TopNotch from '@/Components/TopNotch'


export const index = ({ webapp, userdata, darkmode }) => {
  return (
    <>
      <div className={styles.homeContainer}>
        <TopNotch/>
      </div >
    </>
  )
}


const mapStateToProps = (state) => ({
  webapp: state.Webapp,
  userdata: state.TgData,
  darkmode: state.DarkMode
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)
