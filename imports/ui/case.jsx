import React from 'react';
import { StyleSheet, css } from 'aphrodite';




const Case = ({title, dailyCase, cumulatedCase}) => (
  <div className={ css(styles.container)}>
      <div className={ css(styles.level1)}>
        <div>{title}</div>
      </div>
      <div className={ css(styles.level2)}>
            <div className={ css(styles.inlineCase)}>
                <div>Nouveaux cas : </div>
                <div>{dailyCase}</div>
            </div>
            <div className={ css(styles.inlineCase)}>
                <div>Cas cumulés : </div>
                <div>{cumulatedCase}</div>
            </div>
      </div> 
  </div>
);

const styles = StyleSheet.create({
  container:{
    color:'white',
    borderRadius:'15px',
    border:'2px solid #edffea',
    backgroundImage:'linear-gradient(to bottom, #3b6978, #204051)',
    width:'45%',
    height:'180px',
    display:'flex',
    flexDirection:'column',
    margin:'20px auto',
    '@media only screen and (min-width:300px) and (max-width:1024px)':{
        width:'100%',
    }
  },
  level1:{
      margin:'auto',
  },
  level2:{
    display:'flex',
    flexDirection:'column',
    height:'45%',
    margin:'auto',
    width:'70%',
    '@media only screen and (min-width:300px) and (max-width:1024px)':{
        width:'90%',
        height:'50px'
    }
  },
  inlineCase:{
    display:'flex',
    flexDirection:'row',
    margin:'auto',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'stretch',
    width:'70%'
  }
})

export default Case;
