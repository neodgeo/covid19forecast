import { Meteor } from 'meteor/meteor';
import '../imports/api/case';
import '../imports/api/cumulativeCase';
import { getData } from '../imports/api/getData';
import { SyncedCron } from 'meteor/littledata:synced-cron';

SyncedCron.add({
  name:'getForecast',
  schedule: function(parser){
    return parser.text('every 1 hours');
  },
  job:function(){
    getData()
  }
})


Meteor.startup(() => {
  SyncedCron.add({
    name:'getForecast',
    schedule: function(parser){
      return parser.text('every 1 hours');
    },
    job:function(){
      getData()
    }
  })
  SyncedCron.start()
});
