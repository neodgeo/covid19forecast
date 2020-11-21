import { HTTP } from 'meteor/http';
import { caseData } from './case.js';
import { cumulativeCaseData } from './cumulativeCase';


export function getData(){
    let Future = Npm.require('fibers/future')
    var resultFuture = new Future()
    const result = HTTP.post('http://localhost:5000/api/forecast')
    if(result.statusCode == 200){
        var data = JSON.parse(result.content)
        const cumulated = data.data.cumulated
        const daily = data.data.daily
        cumulativeCaseData.remove({})
        caseData.remove({})
        cumulated.forEach((element,index) => {
            if (index == cumulated.length -1) {
                cumulativeCaseData.insert({'pays':'France', 'date':element.date, 'value':element.values,'isPredict':true})
            }
            cumulativeCaseData.insert({'pays':'France', 'date':element.date, 'value':element.values,'isPredict':false})
        });
        daily.forEach((element,index) => {
            if (index == daily.length -1) {
                caseData.insert({'pays':'France', 'date':element.date, 'value':element.values,'isPredict':true})
            }
            caseData.insert({'pays':'France', 'date':element.date, 'value':element.values,'isPredict':false})
        });
    }
}
