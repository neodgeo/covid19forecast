import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';

const cumulativeCaseData = new Mongo.Collection('cumulativeCaseData');

const cumulativeCaseSchema = new SimpleSchema({
    pays:{
        type:String,
        label:"Pays concerné",
        allowedValues:['France'],
        max:"100"
    },
    date:{
        type:Date,
        label:"Date de la mesure",
        max:"100"
    },
    value:{
        type:Number,
        label:"nombre de personnes infectées",
        max:"150"
    },
    content:{
       type:String,
       label:"content encoded of the file",
    },
    createdAt: {
        type: Date,
        label: "file creation date",
        autoValue: function () {
            if (this.isInsert) {
            return new Date();
            } else {
            this.unset();
            }
        },
    },
})

cumulativeCaseData.attachSchema(cumulativeCaseSchema);

export {
    cumulativeCaseData,
}