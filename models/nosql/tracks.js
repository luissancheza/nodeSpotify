const moongose = require("mongoose");

const TracksSchema = new moongose.Schema(
    {
        name:{
            type: String
        },
        albun:{
            type: String
        },
        cover:{
            type: String,
            validate:{
                validator: (req) =>{
                    return true;
                },
                message: "ERROR_URL"
            },
        },
        artist:{
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality:{
                type: String,
            }
        },
        duration: {
            start:{
                type: Number
            },
            end: {
                type: Number
            }
        },
        mediaId:{
            type:moongose.Types.ObjectId
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = moongose.model("tracks", TracksSchema);