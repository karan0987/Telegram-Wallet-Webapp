import React, { useEffect } from 'react'
import styles from '@/styles/topNotch.module.css'
import AlertSvg from '../../public/svg/bell.svg'
import Image from 'next/image'
import { connect } from 'react-redux'
import toggleDarkMode from '@/Store/Actions/darkMode'

const TopNotch = ({ darkmode, toggleDarkMode }) => {
  useEffect(() => {
    // Set the theme on initial load
    const currentTheme = localStorage.getItem('theme') || 'theme-light';
    document.documentElement.className = currentTheme;
    if (currentTheme === 'theme-dark') {
      toggleDarkMode(true);
    } else {
      toggleDarkMode(false);
    }
  }, [darkmode]);

  const toggleTheme = () => {
    if (darkmode) {
      setTheme('theme-light');
      toggleDarkMode(false)
    } else {
      setTheme('theme-dark');
      toggleDarkMode(true);
    }
  };

  const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  };

  return (
    <div>
      <div className={styles.topNotch}>
        <div className={styles.darkModeSwitch}>
          <input
            checked={darkmode}
            type="checkbox"
            onChange={toggleTheme}
            id="slider"
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </div>
        <div className={styles.alertSection}>
          <Image src={AlertSvg} alt="Alert" />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  darkmode: state.DarkMode
})

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: (isDarkMode) => dispatch(toggleDarkMode(isDarkMode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNotch)
