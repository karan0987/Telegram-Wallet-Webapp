import React from 'react'
import { connect } from 'react-redux'
import styles from '@/styles/dashboard.module.css'
import TopNotch from '@/Components/TopNotch'
import Image from 'next/image'


export const index = ({ webapp, userdata, darkmode }) => {
  return (
    <>
      <TopNotch />
      <div className={`${styles.homeContainer} ${darkmode?styles.dark:styles.light}`} >
        <div className={styles.section_1}>
          <div className={styles.section_1_1}>
            <div className={styles.balanceTab}>
              <p>Total Balance</p>
              <div className={`d-flex`}>
                
              </div>
            </div>
          </div>
          <div className={styles.section_1_2}>
            
          </div>
        </div>
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
