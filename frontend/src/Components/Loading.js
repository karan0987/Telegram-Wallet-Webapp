import React from 'react'
import { connect } from 'react-redux'
import styles from '../styles/loading.module.css'
export const Loading = (props) => {
    return (props.loading_redux || props.loading) && (
        <div className={styles.container} style={props.styles || {}}>
            <div className={styles['dot-floating']}></div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    loading_redux: state.loading
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)