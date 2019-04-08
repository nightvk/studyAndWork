import React, { Component } from 'react'

export default class Button_ref extends Component {
  constructor(p) {
    super(p)
    this.state = {

    }

  }
  static defaultProps = {
    text: 'BUTTON',
    action: () => { },
    option: {
      pattern: 'primary',//模式
      size: 'normal',//大小
      disabled: false,//禁用
      specialEffects: false//特效
    }
  }
  render() {
    return (
      <div style={this.getStyle()} onClick={this.getAction()}>
        {this.props.text}
      </div>
    )
  }

  getStyle() {
    let { pattern, size, disabled, specialEffects } = Object.assign(
      this.props.option,
      this.props.pattern ? { pattern: this.props.pattern } : null,
      this.props.size ? { size: this.props.size } : null,
      this.props.disabled ? { disabled: this.props.disabled } : null,
      this.props.specialEffects ? { specialEffects: this.props.specialEffects } : null
    )
    let defaultStyles = {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'center',
      color: '#fff',
      borderRadius: '0.3rem',
      cursor: 'pointer',
      userSelect: 'none'
    }
    console.log(pattern, size, disabled, specialEffects)
    return Object.assign(defaultStyles, this.getPattern(pattern), this.getSzie(size),this.effects(disabled,specialEffects))

  }

  getPattern(pattern) {
    switch (pattern) {
      case 'primary': return { background: '#337ab7' }
      case 'success': return { background: '#5cb85c' }
      case 'info': return { background: '#5bc0de' }
      case 'warning': return { background: '#f0ad4e' }
      case 'danger': return { background: '#d9534f' }
      default: return { background: '#337ab7' }
    }
  }

  getSzie(size) {
    switch (size) {
      case 'large': return { fontSize: '18px', padding: '10px 16px' }
      case 'normal': return { fontSize: '14px', padding: '8px 12px' }
      case 'small': return { fontSize: '12px', padding: '5px 10px' }
      case 'xsmall': return { fontSize: '12px', padding: '1px 5px' }
      default: return {fontSize: '14px', padding: '8px 12px'}
    }
    //return {width:'100px',height:'30px',fontSize:'.8rem'}
  }

  getAction(){
    let event = this.props.event
    console.log(event)
    return null
    
  }
  effects(disabled,specialEffects){
    if(disabled){
      this.props.action = null
      return {color:'#777',cursor:'not-allowed',background:'#ffe',border:'1px solid #ccc'}
    }
    if(specialEffects){
      //暂无粒子特效
    }
  }
}
