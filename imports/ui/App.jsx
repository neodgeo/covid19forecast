import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { StyleSheet, css } from 'aphrodite';
import { caseData } from '../api/case';
import { cumulativeCaseData } from '../api/cumulativeCase';
import { withTracker } from 'meteor/react-meteor-data';


import Example from './brush';
import Case from './case';



const App = ({daily, cumulated, predict, now, days}) => {
  if (!!now[0] && !!days[0] && !!now[1] && !!days[1]){
    return(
    <div>
      <header className={ css(styles.header)}>
        <h1 className={ css(styles.title)}>Prédiction de l'évolution des cas de Covid 19 en France</h1>
      </header>
      <section className={ css(styles.body)}>
        <div className={ css(styles.containerCase)}>
          <Case title={'Chiffres clés du '+ days[0] +' novembre'} dailyCase={now[0].value} cumulatedCase={now[1].value}/>
          <Case title={'Prédictions pour le '+ days[1] +' novembre'} dailyCase={predict[0].value} cumulatedCase={predict[1].value}/>
        </div>
        <div className={ css(styles.containerParent)}>
          <ParentSize className={ css(styles.parent)} >{({ width, height }) => <Example width={width} height={height} title={'Évolution des nouveaux cas'} data={daily}/>}</ParentSize>
          <ParentSize className={ css(styles.parent)} >{({ width, height }) => <Example width={width} height={height} title={'Évolution des nouveaux cas cumulés'} data={cumulated} />}</ParentSize>
        </div>
      </section>
      <footer className={ css(styles.footer)}>
        <div className={ css(styles.footerContent)}>Créé par Laurent Maximin</div>
      </footer>
    </div>)
  }
  else{
    return(<div>loading</div>)
  }
};

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:'150px',
    display:'flex',
    textAlign:'center',
  },
  title:{
    margin:'auto',
    '@media only screen and (min-width:300px) and (max-width:1024px)':{
      width:'90%',
    }
  },
  body:{
    width:'100%',
    height:'80vh',
    display:'flex',
    flexDirection:'column',
    '@media only screen and (min-width:300px) and (max-width:1024px)':{
      height:'100%',
    }
  },
  containerParent:{
    margin:'auto',
    width:'90%',
    height:450,
    display:'flex',
    '@media only screen and (min-width:300px) and (max-width:1024px)':{
      flexDirection:'column',
      width:'80%',
    }
  },
  containerCase:{
    margin:'auto',
    width:'90%',
    height:250,
    display:'flex',
    '@media only screen and (min-width:300px) and (max-width:1024px)':{
      flexDirection:'column',
      width:'85%',
    }
  },
  parent:{
    width:'45%',
    height:400,
    margin:'auto',
    '@media only screen and (min-width:300px) and (max-width:1024px)':{
      width:'100%',
      height: 200
    }
  },
  footer:{
    display:'flex',
    marginTop:'auto',
    marginBottom:'10px'
  },
  footerContent:{
    margin:'auto',
  }
})

export default AppContainer = withTracker(()=>{
  const daily = caseData.find({}).fetch()
  const cumulated = cumulativeCaseData.find({}).fetch()
  const predictDaily = caseData.findOne({isPredict:true})
  const predictCumulated = cumulativeCaseData.findOne({isPredict:true})
  var nowDaily
  var nowCumulative
  var days
  if(!!predictDaily){
    var dateSplit = predictDaily.date.split('-')
    days=[dateSplit[2]-1,dateSplit[2]]
    var yesterday = dateSplit[0] + '-' + dateSplit[1] + '-' + (parseInt(dateSplit[2]-1))
    nowDaily = caseData.findOne({date:yesterday})
    nowCumulative = cumulativeCaseData.findOne({date:yesterday})
  }
  return{
    daily:daily,
    cumulated:cumulated,
    predict:[predictDaily,predictCumulated],
    now:[nowDaily,nowCumulative],
    days:days
  }
})(App);
