import React from 'react'
import styles from '@/styles/topNotch.module.css'
import AlertSvg from '../../public/svg/bell.svg'
import Image from 'next/image'
import { connect } from 'react-redux'

const TopNotch = () => {
  return (
    <div>
          <div className={styles.topNotch}>
              <div className={styles.darkMode + " "+ ""} >
                  <input type="checkbox" onchange="toggleTheme()" id="slider"/>
                      <span class="slider round"></span>
              </div>
              <div className={styles.alertSection}>
                  <Image src={AlertSvg} />
                  Hello World
              </div>
          </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    darkmode: state.DarkMode
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TopNotch)
