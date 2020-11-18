import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { StyleSheet, css } from 'aphrodite';


import Example from './brush';
import Case from './case';


const App = () => (
  <div>
    <header className={ css(styles.header)}>
      <h1 className={ css(styles.title)}>Prédiction de l'évolution des cas de Covid 19 en France</h1>
    </header>
    <section className={ css(styles.body)}>
      <div className={ css(styles.containerCase)}>
        <Case title={'Chiffres clés du 19 novembre'} dailyCase={12000} cumulatedCase={2000000}/>
        <Case title={'Prédictions pour le 20 novembre'} dailyCase={9840} cumulatedCase={2100000}/>
      </div>
      <div className={ css(styles.containerParent)}>
        <ParentSize className={ css(styles.parent)} >{({ width, height }) => <Example width={width} height={height} title={'Évolution des nouveaux cas'} />}</ParentSize>
        <ParentSize className={ css(styles.parent)} >{({ width, height }) => <Example width={width} height={height} title={'Évolution des nouveaux cas cumulés'}/>}</ParentSize>
      </div>
    </section>
    <footer className={ css(styles.footer)}>
      <div className={ css(styles.footerContent)}>Créé par Laurent Maximin</div>
    </footer>
  </div>
);

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:'150px',
    display:'flex'
  },
  title:{
    margin:'auto'
  },
  body:{
    width:'100%',
    height:'80vh',
    display:'flex',
    flexDirection:'column'
  },
  containerParent:{
    margin:'auto',
    width:'90%',
    height:450,
    display:'flex'
  },
  containerCase:{
    margin:'auto',
    width:'90%',
    height:250,
    display:'flex'
  },
  parent:{
    width:'45%',
    height:400,
    margin:'auto'
  },
  footer:{
    display:'flex',
    marginTop:'auto'
  },
  footerContent:{
    margin:'auto'
  }
})

export default App;
