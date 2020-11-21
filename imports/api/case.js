import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


import SimpleSchema from 'simpl-schema';

const caseData = new Mongo.Collection('caseData');

const caseSchema = new SimpleSchema({
    pays:{
        type:String,
        label:"Pays concerné",
        allowedValues:['France'],
        max:"100"
    },
    date:{
        type:String,
        label:"Date de la mesure",
        max:"100"
    },
    value:{
        type:Number,
        label:"nombre de personnes infectées",
    },
    isPredict:{
        type:Boolean,
        label:"if the value is prediction or not"
    },
    createdAt: {
        type: Date,
        label: "creation date",
        autoValue: function () {
            if (this.isInsert) {
            return new Date();
            } else {
            this.unset();
            }
        },
    },
})

caseData.attachSchema(caseSchema);

Meteor.methods({ 
    getCases() { 
         return caseData.find()
    } 
});

export {
    caseData,
}