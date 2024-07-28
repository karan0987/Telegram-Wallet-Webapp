import React from 'react'
import { connect } from 'react-redux'

export const index = ({webapp,userdata}) => {
  return (
    <div>
      {JSON.stringify(userdata)}
    </div>
  )
}


const mapStateToProps = (state) => ({
  webapp: state.Webapp,
  userdata: state.TgData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)
