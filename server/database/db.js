import mongoose from "mongoose";




const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@freecluster0.ivqqsjq.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log("Database connected successfully")
    }catch(error){
        console.log(`Error while connecting the databse `, error);
    }
}

export default Connection;